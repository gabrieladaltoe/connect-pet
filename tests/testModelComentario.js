const {Comentario, sequelize} = require('../database/models');

Comentario.findAll().then(
    comentarios => console.log(comentarios.map(c => c.toJSON()))
)