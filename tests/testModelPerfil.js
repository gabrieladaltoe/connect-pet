
const { Perfil, sequelize } = require('../database/models');

Perfil.findByPk(1, {include:['usuarios']}).then(
    p=> {
        console.log(p.toJSON());
        sequelize.close();
        }
)

