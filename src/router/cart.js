const router = require('express').Router();
const { getCart, addCart, deleteCart } = require('../controllers');

router.post('/cart', addCart);
router.get('/cart/:userId', getCart);
router.delete('/cart/:productId', deleteCart);

module.exports = router;
