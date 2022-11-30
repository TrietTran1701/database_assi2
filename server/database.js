var mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  database: "test_2",
  user: "Manager",
  password: "yasus462001",
});

module.exports = db;
