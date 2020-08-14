var express = require('express');
var usersController = require('../controllers/users.js')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', usersController.login);
router.post('/register', usersController.register);
router.post('/getUser', usersController.getUser);

module.exports = router;
