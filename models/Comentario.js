const { Sequelize, DataType } = require("sequelize/types");

module.exports = (Sequelize, DataType) => {
    const Comentario = sequelize.define('Usuario', {
        id_comentario: {
            type:DataType.INTERGER,
            primaryKey: true, 
            autoIncrement: true
        },
        comentario:{
            type:DataType.STRING
        },  
        usuario_idUsuario:{
            type:DataType.INTERGER
        },
        publicacao_idPublicacao:{
            type:DataType.INTERGER
        }
    },{
        tableName:'comentarios', 
        timestamps: false
    })

    return Comentario
}