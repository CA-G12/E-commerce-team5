const { signUpValidation } = require('../../validation');
const { checkExistanceQuery, addUserQuery } = require('../../database/queries');
const {
  hashPassword,
  signJWT,
  CustomizedServerErrors,
} = require('../../utils');

const signup = (req, res, next) => {
  const { email, username, password } = req.body;
  signUpValidation({ email, username, password })
    .then(() => checkExistanceQuery('email', email))
    .then((result) => {
      if (result.rows.length) {
        throw new CustomizedServerErrors(400, 'Email Already Exists!', 'email');
      }
    })
    .then(() => checkExistanceQuery('username', username))
    .then((result) => {
      if (result.rows.length) {
        throw new CustomizedServerErrors(
          400,
          'Username Already Exists!',
          'username'
        );
      }
    })
    .then(() => hashPassword(password))
    .then((hashedPassword) => addUserQuery({ email, username, hashedPassword }))
    .then((userData) =>
      signJWT({ id: userData.id, email, username, avatar: userData.avatar })
    )
    .then((token) => res.cookie('token', token).json(token))
    .catch((err) => {
      if (err.details) {
        next(
          new CustomizedServerErrors(
            401,
            `Validation error : ${err.details[0].message}`,
            err.details[0].path[0]
          )
        );
      } else next(err);
    });
};

module.exports = signup;
