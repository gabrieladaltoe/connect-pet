module.exports = (sequelize, DataTypes) =>{

    const p = sequelize.define(
        'Perfil', // nome do model
        {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
            nome: DataTypes.STRING,
            biografia: {type: DataTypes.STRING, allowNull: false},
            localizacao: DataTypes.STRING,
            website: DataTypes.STRING,
            img_user: DataTypes.STRING,
            usuarios_id:{type: DataTypes.INTEGER, allowNull: false}
        },
        {
            tableName: "perfis",
            timestamps: false
        }
    );
    p.associate = (models)=> {
        p.belongsTo(models.Usuario, {as:'usuarios', foreignKey:'usuarios_id'});
    }
   return p;
}