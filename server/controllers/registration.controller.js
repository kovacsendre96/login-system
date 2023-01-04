const db = require("../db-config");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { email, password: Npassword, first_name, last_name, phone } = req.body;
  if (!email || !Npassword || !first_name || !last_name || !phone) {
    return res.json({
      status: "error",
      error: "Please fill the form",
    });
  } else {
    db.query(
      "SELECT email FROM users WHERE email = ?",
      [email],
      async (error, result) => {
        if (error) {
          throw error;
        } else {
          if (result[0]) {
            return res.json({
              status: "error",
              error: "Email has already been registered",
            });
          } else {
            const pass = await bcrypt.hash(Npassword, 8);
            db.query(
              "INSERT INTO users SET ?",
              {
                first_name,
                last_name,
                email,
                password: pass,
                phone,
              },
              (error, result) => {
                if (error) {
                  throw error;
                }
                return res.json({
                  status: "success",
                  error: "User has been registered",
                });
              }
            );
          }
        }
      }
    );
  }
};

module.exports = register;
