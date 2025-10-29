const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller')

// GET products
router.get('/products', productController.getProducts);

// POST new product
router.post('/products', productController.postProduct);

module.exports = router;