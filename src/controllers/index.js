const { signup, login } = require('./auth');
const { getCart, addCart, deleteCart, updateCart } = require('./cart');
const getProducts = require('./products/getProducts');

module.exports = {
  getCart,
  addCart,
  deleteCart,
  updateCart,
  signup,
  login,
  getProducts,
};
