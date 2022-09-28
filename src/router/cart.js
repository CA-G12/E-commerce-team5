const router = require('express').Router();
const { getCart, addCart, deleteCart, updateCart } = require('../controllers');
const { authorization } = require('../middlewares');

router.post('/cart', authorization, addCart);
router.get('/cart', authorization, getCart);
router.patch('/cart', authorization, updateCart);
router.delete('/cart/:productId', authorization, deleteCart);

module.exports = router;
