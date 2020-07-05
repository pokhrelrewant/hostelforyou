const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "pokhrelrewant@gmail.com",
      pass: "k2ZjpqFrGtw79CDh",
    },
  });

  const text =
    "Name: " + name + "\n" + "Email: " + email + "\n" + "Message: " + message;

  // send mail with defined transport object
  try {
    let info = await transporter.sendMail({
      from: '"Hostel for you" <hostelforyou@gmail.com>',
      to: "pokhrelrewant@gmail.com",
      subject: "Information abount a Potential Client.",
      text: text,
      html: "",
    });

    console.log("Message sent: %s", info.messageId);
    res.send("success");
  } catch (error) {
    throw error;
  }
});

module.exports = router;
