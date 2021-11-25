const {Usuario,Perfil,Publicacao,Comentario,Curtida, } = require('../database/models');
const {Op} = require('sequelize');

module.exports = {
    feed: async (req, res) => {
        const public = await Publicacao.findAll({ where: { [Op.not]: { usuarios_id: req.session.usuario.id } } });


        const perfil = await Perfil.findAll({ where: { [Op.not]: { usuarios_id: req.session.usuario.id } } });

        return res.render('feed', { usuario: req.session.usuario, public: public, perfil: req.session.user })

        
        
    },
    feedById: async (req, res) => {
        const { id } = req.params
        let usuarios = await Usuario.findByPk(id)
        return res.render('feed', { usuarios });
    },
    post: async(req, res) => {
        const {filename} = req.file
    }
}