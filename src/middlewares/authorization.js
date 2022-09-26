const { verifyJWT } = require('../utils');

const authorization = (req, res, next) => {
  if (!req.cookies.token) {
    console.log('no token');
    res.json({ istoken: false });
  } else {
    const { token } = req.cookies;
    verifyJWT(token)
      .then((decoded) => {
        console.log(decoded);
        req.user = decoded;
        next();
      })
      .catch((err) => next(err));
  }
};
module.exports = authorization;
