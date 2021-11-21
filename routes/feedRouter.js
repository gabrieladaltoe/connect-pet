var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const FeedController = require('../controllers/FeedController')

router.get('/feed', FeedController.feed)
router.get('/feed/:id', FeedController.feedById)

module.exports = router

