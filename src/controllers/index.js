const { signup } = require('./auth');
const { login } = require('./auth');

module.exports = { signup, login };
const getProducts = require('./products/getProducts');

module.exports = {
  signup,
  getProducts,
};
