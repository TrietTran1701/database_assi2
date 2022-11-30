const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const sqlQuery = require("./sqlQueryHelper");
const cors = require("cors");
var db = require("./database");
const e = require("express");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Register Manager User
// @route: /api/user/register
// @type: PUT
app.put("/api/user/register", (req, res) => {
  let query = sqlQuery.registerUser;
  const userInfo = {
    userID: 0,
    username: "Manager",
    password: "root",
  };
  query += ` (${userInfo.userID}, "${userInfo.username}", "${userInfo.password}")`;

  try {
    db.query(query);
    res.send(query);
  } catch (error) {
    console.log(error);
  }
});

// Login
// @route: /api/user/login
// @type: POST

app.post("/api/user/login", (req, res) => {
  let query = sqlQuery.getManagerUser;
  const username = req.body.username;
  const password = req.body.password;

  db.query(query, [username, password], (err, result) => {
    if (err) {
      res.send({ err: err });
    } else {
      if (result) {
        res.send({
          message: "Login successfully",
          data: result,
          status: 200,
        });
      } else {
        res.send({ message: "Wrong username or password" });
      }
    }
  });
});

app.get("/", (req, res) => {});
app.listen(3001, () => {
  console.log("running on port 3001");
  db.connect(function (err) {
    if (err) throw err;
    console.log("Database connected");
  });
});
