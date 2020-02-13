const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/", async (req, res) => {
  const directoryPath = `client/public/uploads/${req.body.imgFolder}`;
  fs.readdir(directoryPath, function(err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    res.send(files);
  });
});

module.exports = router;
