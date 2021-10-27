module.exports = (sequelize, DataTypes) => {
    const p = sequelize.define(
        'Publicacao',
        {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
            texto: DataTypes.STRING,
            img_pub: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER
        },
        {
            tableName: "publicacoes",
            timestamps: false
        }
)
p.associate = (models)=> {
    p.hasMany(models.Comentario, {as:'comentarios', foreignKey:'publicacoes_id'});
    p.belongsTo(models.Usuario, {as:'publicacao', foreignKey:'usuarios_id'});
}
// testando git

return p;
}

//teste3