module.exports = (sequelize, DataTypes) =>
{
    const u = sequelize.define(
        'Usuario',
        {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
            nome: DataTypes.STRING,
            nome_usuario: DataTypes.STRING,
            email: {type: DataTypes.STRING, allowNull: false},
            senha: DataTypes.STRING
        },
        {
            tableName: "usuarios",
            timestamps: false
        }
    )
    u.associate = (models)=> {
        u.hasMany(models.Publicacao, {as:'publicacaoes', foreignKey:'usuarios_id'});
        u.hasMany(models.Comentario, {as:'usuComentario', foreignKey:'usuarios_id'});
        u.hasMany(models.Perfil, {as:'perfis', foreignKey:'usuarios_id'});
        
    }
    return u;
}