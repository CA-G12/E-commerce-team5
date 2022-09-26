const router = require('express').Router();
const { signup } = require('../controllers');
const { authorization, getLoggedData } = require('../middlewares');

router.post('/signup', signup);
router.get('/isLogged', authorization, getLoggedData);

module.exports = router;
