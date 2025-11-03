const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller')

// GET products
router.get('/products', productController.getProducts);

// GET product by ID
router.get('/products/:id', productController.getProductById);

// POST new product
router.post('/products', productController.postProduct);

// DELETE product
router.delete('/products/:id', productController.deleteProduct);

// PUT product
router.put('/products/:id', productController.updateProduct);

module.exports = router;