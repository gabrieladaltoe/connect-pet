var express = require('express')
const SocialController = require('../controllers/SocialController')
const DesignSystemController = require('../controllers/DesignSystemController')
var router = express.Router()

/* GET home page. */
router.get('/', SocialController.index)

router.get('/profile', SocialController.profileUser)
router.get('/edit-profile', SocialController.editProfile)
router.get('/usuarios', SocialController.viewUsers)


router.get('/design-system', DesignSystemController.viewDesignSystem)
module.exports = router
