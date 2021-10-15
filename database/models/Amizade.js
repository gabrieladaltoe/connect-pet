module.exports = (sequelize, DataTypes) => {

    const a = sequelize.define(
        'amizades',
        {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
            data: {type: DataTypes.DATA, allowNull: false},
            usuarios_P_id: {type: DataTypes.INTEGER, allowNull: false}, 
            usuarios_S_id: DataTypes.INTEGER
        },
        {
            tableName:'amizades',
            timestamps: false
        }
    );

    a.associate = (models) => {

        a.belongsToMany(
            models.Usuario,
            {
                as: 'colegas', // Nome do relacionamento!!!
                through: 'amizades', // Nome da tabela intermediária!!!
                foreignKey: 'usuarios_P_id', // id do model codado na tb intermediária
                otherKey: 'usuarios_S_id', // id do model relacionado na tb intemediária
                timestamps: false
            }
        )

    }
    
    

    return a;
}