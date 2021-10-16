const { Sequelize, DataType } = require("sequelize/types");

module.exports = (Sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        id_usuario: {
            type:DataType.INTERGER,
            primaryKey: true, 
            autoIncrement: true
        },
        nome:{
            type:DataType.STRING
        }, 
        nome_do_usuario:{
            type:DataType.STRING
        }, 
        email:{
            type:DataType.STRING,
            allowNull: false,
        },
        senha:DataType.STRING
    },{
        tableName:'usuario', 
        timestamps: false
    })

    return Usuario
}

