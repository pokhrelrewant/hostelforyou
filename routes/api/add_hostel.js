const express = require("express");
const router = express.Router();
var slugify = require("slugify");
var multer = require("multer");
var mv = require("mv");
var fs = require("fs");

const Hostel = require("../../models/Hostel");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dir = "./uploads/tmp";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post("/", upload.array("f", 12), async (req, res) => {
  let { userData } = req.body;
  userData = JSON.parse(userData);
  let slug = "undefined";
  const {
    name,
    location,
    nearbyInstitutions,
    phoneNo,
    discountOffered,
    fee,
    availableSeating,
    hostelFeatures,
    specialFeatures,
  } = userData;

  try {
    let query = await Hostel.find({
      name: { $regex: new RegExp("^" + name + "[0-9]*", "i") },
    });
    console.log(query);
    if (query.length != 0) {
      slug = slugify(name + query.length, {
        replacement: "-", // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: true, // convert to lower case, defaults to `false`
        strict: false, // strip special characters except replacement, defaults to `false`
      });
    } else {
      slug = slugify(name, {
        replacement: "-",
        remove: undefined,
        lower: true,
        strict: false,
      });
    }
  } catch (error) {}

  let destPath = `./uploads/${slug}`;
  mv("./uploads/tmp", destPath, { mkdirp: true }, function (err) {});
  hostel = new Hostel({
    name,
    slug,
    location,
    nearbyInstitutions: JSON.parse(nearbyInstitutions),
    phoneNo,
    discountOffered,
    fee,
    availableSeating,
    hostelFeatures,
    specialFeatures: JSON.parse(specialFeatures),
    photos: slug,
  });
  console.log(hostel);
  let resp = await hostel.save();
  console.log(resp);
  res.send("Hostel Added");
});

module.exports = router;
