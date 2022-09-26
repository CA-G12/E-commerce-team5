const connection = require('../../config/connection');

// eslint-disable-next-line arrow-body-style
const checkExistance = (value) => {
  return connection.query(`select * from users where email =$1`, [value]);
};
module.exports = checkExistance;
