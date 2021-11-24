const { Publicacao, sequelize } = require('../database/models');

Publicacao.findByPk(1, {include:['usuarios', 'comentarios', 'curtidas']}).then(
    p=> {
        console.log(p.toJSON());
        sequelize.close();
        }
)