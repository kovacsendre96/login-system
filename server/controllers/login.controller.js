const jwt = require("jsonwebtoken");
const db = require("../db-config");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      status: "error",
      error: "Please Enter your email and password",
    });
  } else {
    db.query(
      "SELECT * FROM users WHERE email =?",
      [email],
      async (err, result) => {
        if (err) {
          throw err;
        }
        if (result.length === 0) {
          return res.json({
            status: "error",
            error: "Incorrect email or password",
          });
        }

        const passwordIsMatch = await bcrypt.compare(
          password,
          result[0].password
        );
        if (!passwordIsMatch) {
          return res.json({
            status: "error",
            error: "Incorrect  password",
          });
        } else {
          const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES,
          });
          const cookieOption = {
            expiresIn: new Date(
              Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 1000
            ),
            httpOnly: true,
          };
          res.cookie("userRegistered", token, cookieOption);
          return res.json({
            status: "success",
            success: "User has benn logged In",
          });
        }
      }
    );
  }
};

module.exports = login;
