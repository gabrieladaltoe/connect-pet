module.exports = (sequelize, DataTypes) =>
{
    const u = sequelize.define(
        'Amizade',
        {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
            data: {type: DataTypes.DATEONLY, allowNull: false},
            usuarios_P_id: DataTypes.INTEGER,
            usuarios_S_id: DataTypes.INTEGER,
            
        },
        {
            tableName: "amizades",
            timestamps: false
        }
    )
    u.associate = (models)=> {
        u.belongsToMany(
            models.Amizade,
            {
              as: 'amigos', // nome do relacionamento
              through: 'amizades', // nome da tabela intermediaria
              foreignKey: 'usuarios_P_id',
              otherKey: 'usuarios_S_id',
              timestamps: false
            }
      
          );
      
    }
    return u;
}