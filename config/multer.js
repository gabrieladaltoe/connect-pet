const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', 'public', 'images_pub'),
        filename: (req, file, cb) => {
            const hash = crypto.randomBytes(8).toString('hex');
            const fileName = `${hash}-${file.originalname}`;
            cb(null, fileName);
        }
    })
}
