const express = require("express");
const fs = require("fs")
const router = express.Router();

const Hostel = require("../../models/Hostel");

router.post("/", async (req, res) => {
  objs = req.body;
  let query = await Hostel.findById(objs._id);

  const directoryPath = `client/public/uploads/${query.photos?query.photos:"undefined"}`;
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    query = query.toJSON();
    query.photosPath = files;
    res.send (query);
  });

});

module.exports = router;
