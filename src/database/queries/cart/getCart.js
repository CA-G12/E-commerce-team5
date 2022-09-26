/* eslint-disable arrow-body-style */
const connection = require('../../config/connection');

const getCart = (userId) => {
  return connection.query(
    'select * from cart c inner join users u on c.userId = u.id where u.id = $1 ',
    [userId]
  );
};

module.exports = getCart;
