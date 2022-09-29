const {
  getCartQuery,
  addCartQuery,
  deleteCartQuery,
  updateCartQuery,
} = require('./cart');
const { addUserQuery, checkExistanceQuery } = require('./users');
const {
  getProductsQuery,
  getSingleProductQuery,
  searchProductsQuery,
} = require('./products');

module.exports = {
  addUserQuery,
  checkExistanceQuery,
  getCartQuery,
  addCartQuery,
  deleteCartQuery,
  getSingleProductQuery,
  getProductsQuery,
  updateCartQuery,
  searchProductsQuery,
};
