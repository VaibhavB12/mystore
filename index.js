const express = require("express");
const app = express();
const session = require('express-session');
const MysqlStore = require('express-mysql-session')(session); // create an internal connection & pool to deal with database table which will store the sessions

const home = require("./routes/home");
const bodyParser = require("body-parser");
const addProduct = require("./routes/addProduct");
const editProduct = require("./routes/editProduct");
const deleteProduct = require("./routes/deleteProduct");
const tryCookie = require("./routes/tryCookie");
const userAuth = require("./routes/userAuth");
// const path = require('path')
const options = {
  connectionLimit: 10, // number of connections can created at once
  port: 3306,
  host: "localhost",
  database: "mystore",
  user: "root",
  password: "1234",
  createDatabaseTable: true
}
const sessionStore = new MysqlStore(options);
// const sessionStore = new MysqlStore({
//   connectionLimit: 10, // number of connections can created at once
//   port: 3306,
//   host: "localhost",
//   database: "mystore",
//   user: "root",
//   password: "1234",
//   createDatabaseTable: true, // create table automatically with name "sessions"
//   // if you want to define your own table make above property false & add one more property schema like below
//   // schema: {
//   //   tableName: 'custom_table_name',
//   //   columnNames: {
//   //     session_id: 'custom_field_name',
//   //     expires: 'custom_field_name',
//   //     data: 'custom_field_name'
//   //   }
//   // } 
// })

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(session({ // allow us to use session property of the request object
  secret: 'It is a secret', // this is secret key which hold the secret key for the session
  resave: false, // session will be saved only if there is a change in the session, if set to true it will save the session on every request
  saveUninitialized: false, // forces uninitialized session to be saved in the store 
  store: sessionStore
}));

app.get('/trySession', (req, res)=>{
  console.log(req.session.id); // we see session id in terminal
  res.send(req.session.isLoggedIn); // login on page & press f12 we see cookie with connect.sid which is session cookie
});

app.use(express.static(__dirname));
app.use("/", home);
app.use("/add-product", addProduct);
app.use("/edit-product", editProduct);
app.use("/delete-product", deleteProduct);
app.use("/tryCookie", tryCookie);
app.use("/", userAuth);
// app.use(express.static("./assets"));
// app.use(express.static(path.join(__dirname, 'assets')));

const server = app.listen(3000, (req, res) => {
  console.log("Server is listening...");
});
