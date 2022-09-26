const connection = require('../../config/connection');

const checkExistance = (key, value) =>
  connection.query(`select * from users where ${key} =$1`, [value]);
module.exports = checkExistance;
