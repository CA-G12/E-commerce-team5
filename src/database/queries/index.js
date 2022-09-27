const { getCartQuery, addCartQuery, deleteCartQuery } = require('./cart');
const { addUserQuery, checkExistanceQuery } = require('./users');
const { getProductsQuery, getSingleProductQuery } = require('./products');

module.exports = {
  addUserQuery,
  checkExistanceQuery,
  getCartQuery,
  addCartQuery,
  deleteCartQuery,
  getSingleProductQuery,
  getProductsQuery,
};
