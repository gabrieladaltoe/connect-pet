var express = require('express');
const SocialController = require('../controllers/SocialController');
var router = express.Router();

/* GET home page. */
router.get('/', SocialController.index);
router.get('/feed', SocialController.feed);
router.get('/usuarios', SocialController.listarUsuarios);

module.exports = router;
