const router = require('express').Router();
const AuthRoutes = require('./auth');
const productRouter = require('./products');

router.use(AuthRoutes);
router.use(productRouter);

module.exports = router;
