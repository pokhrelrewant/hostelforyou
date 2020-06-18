const express = require("express");
const router = express.Router();
var fs = require("fs");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
var rimraf = require("rimraf");
const { writeFile } = require("fs").promises

router.post("/", upload.single("f"), (req, res) => {
  console.log(req.files.f);
  writeFile("./uploads/" + req.files.f.name, req.files.f.data)
  if (req.files === null) {
    return res.status(400).json({ msg: "No file Uploaded" });
  }
  res.json(req.body);
});

module.exports = router;
