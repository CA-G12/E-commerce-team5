const { getCartQuery, addCartQuery, deleteCartQuery } = require('./cart');
const { addUserQuery, checkExistanceQuery } = require('./users');
const getProductsQuery = require('./products/getProducts');

module.exports = {
  addUserQuery,
  checkExistanceQuery,
  getCartQuery,
  addCartQuery,
  deleteCartQuery,
  getProductsQuery,
};
