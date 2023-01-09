const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db-config");
const cookie = require("cookie-parser");
const cors = require("cors");
const pagesRouter = require("./routes/pages");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://login-system-plum.vercel.app",
      "https://login-system-5u8b.onrender.com",
    ],
  })
);

const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookie());
app.use("/api", require("./routes/user.router"));
app.use(pagesRouter);
app.use(express.static(path.join(__dirname, "", "public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "", "public", "index.html"));
});
// db.connect((err, connection) => {
//   if (err) {
//     throw err;
//   }
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
