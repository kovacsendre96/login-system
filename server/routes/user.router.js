const express = require("express");
const registration = require("../controllers/registration.controller");
const login = require("../controllers/login.controller");
const user = require("../controllers/user.controller");
const logout = require("../controllers/logout.controller");
const router = express.Router();

router.post("/registration", registration);
router.post("/login", login);
router.get("/user", user);
router.get("/logout", logout);

module.exports = router;
