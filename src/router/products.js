const router = require('express').Router();

const {
  getSingleProduct,
  searchProducts,
  getProductsCount,
  getCategories,
} = require('../controllers');
const getProducts = require('../controllers/products/getProducts');
const getProductsByOffset = require('../controllers/products/getProuductsByOffset');

router.get('/products', getProducts);
router.get('/products/page/:start', getProductsByOffset);
router.get('/products-count', getProductsCount);
router.get('/search/:q&:c', searchProducts);
router.get('/products/:productId', getSingleProduct);
router.get('/categories', getCategories);
module.exports = router;
