"use strict";

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

const APP_NAME = "ncc global site";

const app = express();

function sendEmail(content) {
  const mailOptions = {
    from: `${APP_NAME} <noreplynccplus@gmail.com>`,
    to: "info@ncc.asia",
  };

  // The user subscribed to the newsletter.
  mailOptions.subject = `new email from ${APP_NAME}!`;
  mailOptions.text = `New email: ${content || ""}`;
  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log("New welcome email sent to:", "info@ncc.asia");
  });
}

app.use(function (req, res, next) {
  var allowedDomains = [
    "https://kryptohub.co",
    "localhost",
    "127.0.0.1",
    "http://127.0.0.1",
    "http://localhost",
  ];
  var origin = req.headers.origin;
  if (allowedDomains.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/ncc-site-api-sendmail", cors(), function (request, response) {
  var query = request.body;

  console.log("NEW EMAIL FROM: ", query);

  sendEmail("From:\n" + query.email + "\n" + "Message:\n" + query.content);

  response.end("OK");
});

exports.app = functions.https.onRequest(app);
