module.exports = (sequelize, DataTypes) =>
{
    const c = sequelize.define(
        'Curtida',
        {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
            data: {type: DataTypes.DATEONLY, allowNull: false},
            publicacoes_id:{type: DataTypes.INTEGER, allowNull: false},
            usuarios_id:{type: DataTypes.INTEGER, allowNull: false}
        },
        {
            tableName: "curtidas",
            timestamps: false
        }
    )
    c.associate =(models) =>{
        c.belongsTo(models.Publicacao, {as:'curtidas', foreignKey:'publicacoes_id'});
        c.belongsTo(models.Usuario, {as:'usuarios', foreignKey:'usuarios_id'});
    }
    return c;
}