const { addUserQuery, checkExistanceQuery } = require('./users');
const { getCartQuery, addCartQuery, deleteCartQuery } = require('./cart');

module.exports = {
  addUserQuery,
  checkExistanceQuery,
  getCartQuery,
  addCartQuery,
  deleteCartQuery,
};
