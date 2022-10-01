const { deleteCartQuery } = require('../../database/queries');

/* eslint-disable no-unused-vars */
const deleteCart = (req, res) => {
  const userId = req.user.id;
  const { productId } = req.params;
  deleteCartQuery({ userId, productId }).then((data) =>
    res.json({ res: data, msg: 'cart deleted' })
  );
};
module.exports = deleteCart;
