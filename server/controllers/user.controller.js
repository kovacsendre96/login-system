const db = require("../db-config");
const jwt = require("jsonwebtoken");

const user = async (req, res, next) => {
  if (!req.cookies.userRegistered) {
    return res.json(null);
  }
  try {
    const decoded = jwt.verify(
      req.cookies.userRegistered,
      process.env.JWT_SECRET
    );
    db.query("SELECT * FROM users WHERE id =?", [decoded.id], (err, result) => {
      if (err) {
        return next();
      }
      return res.json(result[0]);
    });
  } catch (error) {
    if (error) {
      return next();
    }
  }
};

module.exports = user;
