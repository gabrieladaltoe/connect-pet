const express = require('express');
const router = express.Router();
const FeedController = require('../controllers/FeedController')
const postFile = require('../middlewares/postFile');

router.get('/feed', FeedController.feed)
router.get('/feed/:id', FeedController.feedById)
router.post('/post', postFile.single('image'), FeedController.post);

module.exports = router

