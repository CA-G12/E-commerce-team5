/* eslint-disable no-unused-vars */
const { addCartQuery } = require('../../database/queries');

const addCart = (req, res) => {
  console.log('in add cart controller');
  const { productId, quantity } = req.body;
  const userId = req.user.id;
  const q = quantity || 1;
  addCartQuery({ userId, productId, q })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ mag: 'couldnt add product to cart!, Please Try again' });
    });
};
module.exports = addCart;
