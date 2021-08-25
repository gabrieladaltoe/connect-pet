var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');

console.log(bcrypt.hashSync('123456', 10))

const AuthController = require('../controllers/AuthController')

router.get('/login', AuthController.showLogin);
router.post('/login', AuthController.login);

module.exports = router;
