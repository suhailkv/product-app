const express = require('express');
const productController = require('../controllers/productController');
const CONSTANTS = require('../constants')
const router = express.Router();

router.post(`/${CONSTANTS.PRODUCT_API}`, productController.createProduct);
router.get(`/${CONSTANTS.PRODUCT_API}`, productController.getAllProducts);
router.get(`/${CONSTANTS.PRODUCT_API}/:product_id`, productController.getProductWithProfit);


module.exports = router;
