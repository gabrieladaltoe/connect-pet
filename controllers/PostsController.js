const {Usuario, Perfil} = require('../database/models');
const multer =  require('multer');
const upload = require('../middlewares/Upload');

module.exports = {
    posts: async(req,res) => {
        console.log(req.file);
    }
}
