const connection = require('../../config/connection');

const searchProducts = (q) =>
  connection.query(
    `select p.* , c.name as category_name
      from products p left join categories c on p.categoryId=c.id
     where LOWER(p.name) like $1;`,
    [`%${q}%`]
  );

module.exports = searchProducts;
