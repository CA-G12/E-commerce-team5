/* eslint-disable arrow-body-style */
const connection = require('../../config/connection');

const getCart = (userId) => {
  return connection.query(
    `select p.price,p.image,p.name,c.quantity,c.timeAdded
    from
     products p inner join cart c on p.id = c.userId
      inner join users  on users.id =c.userId where users.id = $1 `,
    [userId]
  );
};

module.exports = getCart;
