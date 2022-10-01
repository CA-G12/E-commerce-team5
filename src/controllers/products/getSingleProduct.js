const { getSingleProductQuery } = require('../../database/queries');

const getSingleProduct = (req, res) => {
  const { productId } = req.params;
  getSingleProductQuery(productId)
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      res.status(500).json('something went wrong', err);
    });
};

module.exports = getSingleProduct;
