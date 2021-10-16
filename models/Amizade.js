const { Sequelize, DataType } = require("sequelize/types");

module.exports = (Sequelize, DataType) => {
    const Comentario = sequelize.define('Usuario', {
        id_amizade: {
            type:DataType.INTERGER,
            primaryKey: true, 
            autoIncrement: true
        },
        data:{
            type:DataType.DATE
        },  
        usuario_idUsuarioPrimario:{
            type:DataType.INTERGER
        },
        usuario_idUsuarioSecundario:{
            type:DataType.INTERGER
        }
        
    },{
        tableName:'amizade', 
        timestamps: false
    })

    return Comentario
}