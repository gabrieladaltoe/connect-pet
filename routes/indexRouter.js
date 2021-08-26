var express = require('express')
const SocialController = require('../controllers/SocialController')
const DesignSystemController = require('../controllers/DesignSystemController')
var router = express.Router()

/* GET home page. */
router.get('/', SocialController.index)
router.get('/feed', SocialController.feed)
router.get('/usuarios', SocialController.listarUsuarios)

router.get('/design-system', DesignSystemController.viewDesignSystem)
router.get('/profile', SocialController.profileUser)
router.get('/users', SocialController.viewUsers)
router.get('/edit-profile', SocialController.editProfile)


module.exports = router
