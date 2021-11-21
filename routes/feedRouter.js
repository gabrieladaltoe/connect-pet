const express = require('express');
const router = express.Router();
const FeedController = require('../controllers/FeedController')

router.get('/feed', FeedController.feed)
router.get('/feed/:id', FeedController.feedById)

module.exports = router

