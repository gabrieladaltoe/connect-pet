const { Sequelize, DataType } = require("sequelize/types");

module.exports = (Sequelize, DataType) => {
    const Publicacao = sequelize.define('Usuario', {
        id_publicacao: {
            type:DataType.INTERGER,
            primaryKey: true, 
            autoIncrement: true
        },
        texto:{
            type:DataType.STRING
        }, 
        img_pub:{
            type:DataType.STRING
        }, 
        usuario_idUsuario:{
            type:DataType.INTERGER,
        },
    },{
        tableName:'publicacoes', 
        timestamps: false
    })

    return Publicacao
}

