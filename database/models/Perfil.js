module.exports = (sequelize, DataTypes) =>{

    const p = sequelize.define(
        'Perfil',
        {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
            nome: DataTypes.STRING,
            biografia: {type: DataTypes.STRING, allowNull: false},
            localizacao: DataTypes.STRING,
            website: DataTypes.STRING,
            img_user: DataTypes.STRING
        },
        {
            tableName: "perfis",
            timestamps: false
        }
    );

    p.belongsTo(models.Usuario, {as:'perfis', foreignKey:'usuarios_id'});
    return u;

}