'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'perfil',
      {
        id: { type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nome: { type: Sequelize.DataTypes.STRING(45), allowNull: false },
        biografia: Sequelize.DataTypes.TEXT,
        localizacao: Sequelize.DataTypes.STRING(45),
        website: Sequelize.DataTypes.STRING(45),
        img_user: Sequelize.DataTypes.BLOB,
        usuarios_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'usuarios'
            },
            key: 'id'
          }
        }


      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('perfil')
  }
};
