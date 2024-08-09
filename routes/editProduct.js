const express = require("express");
const {
  renderEditProducts,
  editProduct,
} = require("../controllers/productController");
const router = express.Router();

router.get("/:id", renderEditProducts); // coming from "product.id" of home.ejs line <a href="/edit-product/<%= product.id %>" class="btn btn-outline-dark mx-1 mt-4 edit-buttons">
router.post("/:id", editProduct);

module.exports = router;
