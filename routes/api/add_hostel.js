const express = require("express");
const router = express.Router();
var slugify = require("slugify");

const Hostel = require("../../models/Hostel");
const validateHostelBody = require("../../middleware/validateHostelBody");

router.post("/", async (req, res) => {
  let {
    name,
    location,
    nearbyInstitutions,
    phoneNo,
    discountOffered,
    fee,
    availableSeating,
    hostelFeatures,
    specialFeatures,
  } = req.body;
  let slug = "undefined";
  try {
    let query = await Hostel.find({
      name: { $regex: new RegExp("^" + name + "[0-9]*", "i") },
    });
    console.log(query);
    if (query != null) {
      slug = slugify(name + query.length, {
        replacement: "-", // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: true, // convert to lower case, defaults to `false`
        strict: false, // strip special characters except replacement, defaults to `false`
      });
    }
  } catch (error) {}

  hostel = new Hostel({
    name,
    slug,
    location,
    nearbyInstitutions,
    phoneNo,
    discountOffered,
    fee,
    availableSeating,
    hostelFeatures,
    specialFeatures,
    photos: slug,
  });

  let resp = await hostel.save();
  console.log(resp);
  res.send("Hostel Added");
});

module.exports = router;
