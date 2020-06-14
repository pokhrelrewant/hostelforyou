const express = require("express");
const router = express.Router();

const Hostel = require("../../models/Hostel");

router.post("/", async (req, res) => {
  objs = req.body;
  console.log(req.body);
  for (obj in objs) {
    if (objs[obj] === "") {
      delete objs[obj];
    }
  }
  if (objs.name != null) {
    query = await Hostel.find({
      name: { $regex: `/${objs.name}/`, $options: "i" },
    });
    console.log(query);
  } else {
    console.log("hello");
    query = await Hostel.find(objs);
  }

  res.send(query);
});

module.exports = router;
