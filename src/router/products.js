const router = require('express').Router();

const getProducts = require('../controllers/products/getProducts');

router.get('/products', getProducts);
module.exports = router;
