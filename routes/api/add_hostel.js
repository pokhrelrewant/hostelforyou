const express = require("express");
const router = express.Router();

const Hostel = require("../../models/Hostel");
const validateHostelBody = require("../../middleware/validateHostelBody");

router.post("/", async (req, res) => {
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
    photos
  } = req.body;

  hostel = new Hostel({
    name,
    location,
    nearbyInstitutions,
    phoneNo,
    discountOffered,
    fee,
    availableSeating,
    hostelFeatures,
    specialFeatures,
    photos
  });

  await hostel.save();
  res.send("Hostel Added");
});

module.exports = router;
