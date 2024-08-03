const express = require('express');
const { renderEditProducts } = require('../controllers/productController');
const router = express.Router();

router.get('/:id', renderEditProducts); // coming from "product.id" of home.ejs line <a href="/edit-product/<%= product.id %>" class="btn btn-outline-dark mx-1 mt-4 edit-buttons">


module.exports = router;