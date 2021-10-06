const { Sequelize, DataType } = require("sequelize/types");

module.exports = (Sequelize, DataType) => {
    const Curtida = sequelize.define('Usuario', {
        id_curtida: {
            type:DataType.INTERGER,
            primaryKey: true, 
            autoIncrement: true
        },
        data:{
            type:DataType.DATE
        },  
        usuario_idUsuario:{
            type:DataType.INTERGER
        },
        publicacao_idPublicacao:{
            type:DataType.INTERGER
        }
    },{
        tableName:'curtidas', 
        timestamps: false
    })

    return Curtida
}