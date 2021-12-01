const {Curtida, sequelize} = require('../database/models');


Curtida.findByPk(1, {include:['usuarios']}).then(
    c=> {
        console.log(c.toJSON());
        sequelize.close();
        }
)