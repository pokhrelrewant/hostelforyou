const express = require("express");
const connectDB = require("./config/db");

const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
app.use(cors());
app.use(
  fileUpload({
    limits: {
      fileSize: 50 * 1024 * 1024,
      safeFileNames: true,
      preserveExtension: true,
      createParentPath: true
    }
  })
);
connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

app.use("/api/add_hostel", require("./routes/api/add_hostel"));
app.use("/api/retrieve_hostels", require("./routes/api/retrieve_hostel"));
app.use("/api/upload", require("./routes/api/upload"));
app.use("/api/pathCheck", require("./routes/api/pathCheck"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
