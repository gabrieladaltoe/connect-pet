var express = require('express')
const SocialController = require('../controllers/SocialController')
const DesignSystemController = require('../controllers/DesignSystemController')
var router = express.Router()

/* GET home page. */
router.get('/', SocialController.index)
router.get('/feed', SocialController.feed)
router.get('/design-system', DesignSystemController.viewDesignSystem)
router.get('/perfil', SocialController.profileUser)
router.get('/users', SocialController.viewUsers)
router.get('/contato', SocialController.quemSomos)


module.exports = router
