module.exports = (Sequelize, DataTypes) => {
  const usuario = sequelize.define(
    'usuario',
    {
      nome: { type: Sequelize.DataTypes.STRING(45), allowNull: false },
      nome_usuario: { type: Sequelize.DataTypes.STRING(45), allowNull: false },
      email: { type: Sequelize.DataTypes.STRING(45), allowNull: false },
      senha: { type: Sequelize.DataTypes.STRING(256), allowNull: false }
    },
    {
      tableName: 'usuarios',
      timestamps: false
    }

  );

  usuario.associate = (models) => {
    // associando usuarios com contatos
    usuario.hasOne(models.perfil, { as: 'perfil', foreignKey: 'usuarios_id' });

    // Associando um usuario com outros usuarios(amizade) (muitos para muitos)
    usuario.belongsToMany(
      models.Usuario,
      {
        as: 'amigos', // nome do relacionamento
        through: 'amizades', // nome da tabela intermediaria
        foreignKey: 'usuarios_P_id',
        otherKey: 'usuarios_S_id',
        timestamps: false
      }

    );

    usuario.hasMany(models.comentario, { as: 'comentario', foreignKey: 'usuarios_id' });
    usuario.hasMany(models.publicacao, { as: 'publicacao', foreignKey: 'usuarios_id' });
    usuario.hasMany(models.curtida, { as: 'curtida', foreignKey: 'usuarios_id' });



  }



  return usuario

}