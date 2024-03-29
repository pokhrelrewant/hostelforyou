const express = require("express");
const connectDB = require("./config/db");

const app = express();
const cors = require("cors");
app.use(cors());

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));
app.use("/hostelphotos", express.static("./uploads"));
app.use("/api/add_hostel", require("./routes/api/add_hostel"));
app.use("/api/retrieve_hostels", require("./routes/api/retrieve_hostel"));
app.use("/api/retrieve_hostels_id", require("./routes/api/retrieve_hostel_id"));
app.use("/api/upload", require("./routes/api/upload"));
app.use("/api/contact", require("./routes/api/contact"));
app.use("/api/pathCheck", require("./routes/api/pathCheck"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
