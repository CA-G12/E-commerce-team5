const router = require('express').Router();

const { getSingleProduct, searchProducts } = require('../controllers');
const getProducts = require('../controllers/products/getProducts');

router.get('/products', getProducts);
router.get('/search/:q', searchProducts);
router.get('/products/:productId', getSingleProduct);
module.exports = router;
