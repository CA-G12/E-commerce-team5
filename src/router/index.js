const router = require('express').Router();
const AuthRoutes = require('./auth');
const CartRoutes = require('./cart');

router.use(AuthRoutes);
router.use(CartRoutes);

module.exports = router;
