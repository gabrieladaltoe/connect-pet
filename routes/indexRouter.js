const express = require('express')
const SocialController = require('../controllers/SocialController')
const FeedController = require('../controllers/FeedController');
const Feed = require('../controllers/FeedController')
const DesignSystemController = require('../controllers/DesignSystemController')
const router = express.Router()

/* GET home page. */
router.get('/', SocialController.index)
router.get('/feed', Feed.feed)
router.get('/design-system', DesignSystemController.viewDesignSystem)
//router.get('/user-profile', SocialController.profile)
router.get('/feed', FeedController.feed)
router.get('/contato', SocialController.quemSomos)
router.get('/usuarios', SocialController.viewUsers)
router.get('/usuarios/:id/seguirAmigos', SocialController.seguirAmigos);
module.exports = router