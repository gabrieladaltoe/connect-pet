const {Usuario,Perfil,Publicacao,Comentario,Curtida} = require('../database/models');
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    feed: async (req, res) => {
        const public = await Publicacao.findAll();
        console.log(public);
        return res.render('feed', { usuario: req.session.usuario, public: public })

    },
    feedById: async (req, res) => {
        const { id } = req.params
        let usuarios = await Usuario.findByPk(id)
        console.log(usuarios)
        return res.render('feed', { usuarios });

    }
}

