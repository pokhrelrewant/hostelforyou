const express = require("express");
const router = express.Router();
var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post("/", upload.array("f", 12), (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file Uploaded" });
  }
  res.json(req.files);
});

module.exports = router;
