const multer = require('multer');
const config = require('../config/multer');
const upload = multer(config);

module.exports = upload

