const { signup } = require('./auth');
const { login } = require('./auth');
const getProducts = require('./products/getProducts');

module.exports = {
  signup,
  login,
  getProducts,
};
