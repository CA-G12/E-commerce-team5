const router = require('express').Router();

const { getSingleProduct } = require('../controllers');
const getProducts = require('../controllers/products/getProducts');

router.get('/products', getProducts);
router.get('/products/:productId', getSingleProduct);
module.exports = router;
