const {Curtida, sequelize} = require('../database/models');


Curtida.findByPk(1, {include:['usuarios']}).then(
    c=> {
        console.log(c.toJSON());
        sequelize.close();
        }
)
/*
Curtida.findAll().then(
    curtidas => console.log(curtidas.map(c => c.toJSON()))
)*/
