
const { Perfil, sequelize } = require('../database/models');
/*
Perfil.findAll({include}).then(
    perfis => console.log(perfis.map(p => p.toJSON()))
)*/

Perfil.findByPk(1, {include:['usuarios']}).then(
    p=> {
        console.log(p.toJSON());
        sequelize.close();
        }
)

