const { signup, login } = require('./auth');
const getProducts = require('./products/getProducts');

module.exports = {
  signup,
  login,
  getProducts,
};
