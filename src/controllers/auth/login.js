const bcrypt = require('bcrypt');
const { signInValidation } = require('../../validation');
const { checkExistanceQuery } = require('../../database/queries');
const { signJWT, CustomizedServerErrors } = require('../../utils');

const signIn = (req, res, next) => {
  const { email, password } = req.body;
  signInValidation({ email, password })
    .then(() => checkExistanceQuery('email', email))
    .then((result) => {
      if (!result.rows.length) {
        throw new CustomizedServerErrors(401, 'User not found!');
      } else {
        return result.rows[0];
      }
    })
    .then((userData) =>
      bcrypt.compare(password, userData.password).then((data) => {
        if (!data) {
          throw new CustomizedServerErrors(401, 'Invalid password');
        }
        return userData;
      })
    )
    .then((data) =>
      signJWT({
        id: data.id,
        email,
        username: data.username,
        avatar: data.avatar,
      })
    )
    .then((token) => res.cookie('token', token).json(token))

    .catch((err) => {
      if (err.details) {
        next(
          new CustomizedServerErrors(
            401,
            `Validation error : ${err.details[0].message}`
          )
        );
      } else next(err);
    });
};

module.exports = signIn;
