const express = require("express");
const router = express.Router();

const Hostel = require("../../models/Hostel");

router.post("/", async (req, res) => {
  let searchParams = req.body;
  for (param in searchParams)
    if (searchParams[param] === "") delete searchParams[param];

  let searchQuery = { ...searchParams };
  if (searchParams.name !== undefined)
    searchQuery.name = { $regex: new RegExp(searchParams.name, "i") };

  console.log(searchQuery);
  query = await Hostel.find(searchQuery);
  res.send(query);
});

module.exports = router;
