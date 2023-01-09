const express = require("express");
const path = require("path");
const loggedIn = require("../controllers/loggedIn.controller.");

const pagesRouter = express.Router();

pagesRouter.get("/", loggedIn, (req, res) => {
  res.redirect("/welcome");
});

pagesRouter.get("/registation", loggedIn, (req, res) => {
  if (req.user) {
    res.redirect("/welcome");
  } else {
    res.sendFile(path.join(__dirname, "../", "public", "index.html"));
  }
});

pagesRouter.get("/login", loggedIn, (req, res) => {
  if (req.user) {
    res.redirect("/welcome");
  } else {
    res.sendFile(path.join(__dirname, "../", "public", "index.html"));
  }
});

module.exports = pagesRouter;
