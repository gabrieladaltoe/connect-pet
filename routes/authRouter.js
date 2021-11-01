var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');

console.log(bcrypt.hashSync('123456', 10))

const AuthController = require('../controllers/AuthController')

router.get('/', AuthController.showLogin);
router.post('/login', AuthController.login);
router.post('/registrar', AuthController.registrar);
module.exports = router;
