const { signup, login } = require('./auth');
const { getCart, addCart, deleteCart, updateCart } = require('./cart');
const { getProducts, getSingleProduct } = require('./products');

module.exports = {
  getCart,
  addCart,
  deleteCart,
  updateCart,
  signup,
  login,
  getProducts,
  getSingleProduct,
};
