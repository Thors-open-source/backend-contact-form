require("dotenv").config();

var nodemailer = require("nodemailer");

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

var GMAIL_USER = process.env.EMAIL;
var GMAIL_PASS = process.env.PASS;

var PORT = 8080;

function mail(form) {
  app.get("/", (req, res) => {
    res.send(form);
  });

  app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));

  app.post("/", (req, res) => {
    var smtpTrans = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    var mailOptions = {
      from: "Your sender info here", // ignored by gmail
      to: GMAIL_USER,
      subject: "New message from contact form",
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`,
    };

    smtpTrans.sendMail(mailOptions, (error, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Message is sent...");
      }
    });
  });
}

module.exports = mail;
