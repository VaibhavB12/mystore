const express = require("express");
const app = express();
const home = require("./routes/home");
const bodyParser = require("body-parser");
const addProduct = require("./routes/addProduct");
const editProduct = require("./routes/editProduct");
const deleteProduct = require("./routes/deleteProduct");
const tryCookie = require("./routes/tryCookie");
const userAuth = require("./routes/userAuth");
// const path = require('path')

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

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
