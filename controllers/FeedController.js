const {Usuario,Perfil,Publicacao,Comentario,Curtida} = require('../database/models');

module.exports = {
    feed: async (req, res) => {
        const public = await Publicacao.findAll();
        return res.render('feed', { usuario: req.session.usuario, public: public, my_perfil: req.session.user })
    },
    feedById: async (req, res) => {
        const { id } = req.params
        let usuarios = await Usuario.findByPk(id)
        return res.render('feed', { usuarios });
    }
}

