const express = require("express");
const router = express.Router();
var fs = require("fs");
var rimraf = require("rimraf");

router.post("/", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file Uploaded" });
  }
  const parentDir = process.cwd();
  var dir = `${parentDir}/client/public/uploads/${req.body.id}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  for (let file in req.files) {
    const simg = req.files[file];
    simg.mv(`${dir}/${simg.name}`, err => {
      if (err) {
        rimraf(`${dir}`, function() {
          console.log("Folder removed due to error.");
        });
        console.error(err);
        return res.status(500).send(err);
      }
    });
  }
  res.json("uploaded");
});

module.exports = router;
