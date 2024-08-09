const mysql = require("mysql2");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "mystore",
  port: 3306,
  multipleStatements: true,
});

module.exports = pool.promise(); // the reason for using promise is to make query statemenrs then-able which makes easier to have asynchronous processes
