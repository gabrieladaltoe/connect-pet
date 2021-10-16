const { Sequelize, DataType } = require("sequelize/types");

module.exports = (Sequelize, DataType) => {
    const Perfil = sequelize.define('Usuario', {
        id_perfil: {
            type:DataType.INTERGER,
            primaryKey: true, 
            autoIncrement: true
        },
        nome:{
            type:DataType.STRING
        },
        biografia:{
            type:DataType.STRING
        }, 
        localizacao:{
            type:DataType.STRING
        }, 
        img_user:{
            type:DataType.STRING
        }, 
        website:{
            type:DataType.STRING
        },  
        usuario_idUsuario:{
            type:DataType.INTERGER,
        },
    },{
        tableName:'perfil', 
        timestamps: false
    })

    return Perfil
}