
const { Usuario, sequelize } = require('../database/models');

Usuario.findByPk(1, {include:['publicacaoes', 'usuComentario', 'usuCurtida', 'perfis', 'amigos']}).then(
    u=> {
        console.log(u.toJSON());
        sequelize.close();
        }
)