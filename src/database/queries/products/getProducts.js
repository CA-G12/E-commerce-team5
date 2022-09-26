const connection = require('../../config/connection');

const getProducts = () => connection.query('select * from products');

module.exports = getProducts;
