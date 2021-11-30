const express = require('express');
const router = express.Router();
const FeedController = require('../controllers/FeedController')
const postFile = require('../middlewares/postFile');
const multer = require('multer')
const multerConfig = require('../config/multer')

router.get('/feed', FeedController.feed)
router.post('/feed', postFile.single('image'), FeedController.post);
router.get('/feed/:id', FeedController.feedById)

module.exports = router

