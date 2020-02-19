const express = require("express");
const router = express.Router();

const Hostel = require("../../models/Hostel");

router.post("/", async (req, res) => {
  objs = req.body;
  //   for (obj in objs) {
  //     if (objs[obj] === "") {
  //       delete objs[obj];
  //     }
  //   }
  let query = await Hostel.findById(objs._id);
  res.send(query);
});

module.exports = router;
