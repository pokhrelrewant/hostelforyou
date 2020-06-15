const express = require("express");
const router = express.Router();

const Hostel = require("../../models/Hostel");

router.post("/", async (req, res) => {
  objs = req.body;
  for (obj in objs) {
    if (objs[obj] === "") {
      delete objs[obj];
    }
  }
  if (objs.name != null) {
    query = await Hostel.find({
      name: { $regex: new RegExp(objs.name, "i") },
      // nearbyInstitutions: objs.nearbyInstitutions,
      // location: objs.location,
    });
  } else {
    query = await Hostel.find(objs);
  }

  res.send(query);
});

module.exports = router;
