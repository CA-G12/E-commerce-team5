const router = require('express').Router();
const { getCart, addCart, deleteCart } = require('../controllers');
const { authorization } = require('../middlewares');

router.post('/cart', authorization, addCart);
router.get('/cart/:userId', authorization, getCart);
router.delete('/cart/:productId', authorization, deleteCart);

module.exports = router;
