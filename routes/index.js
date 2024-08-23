const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.post('/products', productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:product_id', productController.getProductWithProfit);


module.exports = router;
