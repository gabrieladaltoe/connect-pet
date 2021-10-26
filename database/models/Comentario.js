module.exports = (sequelize, DataTypes) =>
{
    const c = sequelize.define(
        'Comentario',
        {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
            comentario: {type: DataTypes.STRING, allowNull: false},
            data: {type: DataTypes.DATEONLY, allowNull: false},
            publicacoes_id:{type: DataTypes.INTEGER, allowNull: false},
            usuarios_id:{type: DataTypes.INTEGER, allowNull: false}
        },
        {
            tableName: "comentarios",
            timestamps: false
        }
    )
    c.associate =(models) =>{
        c.belongsTo(models.Publicacao, {as:'comentarios', foreignKey:'publicacoes_id'});
        c.belongsTo(models.Usuario, {as:'usuComentarios', foreignKey:'usuarios_id'});
    }
    return c;
}