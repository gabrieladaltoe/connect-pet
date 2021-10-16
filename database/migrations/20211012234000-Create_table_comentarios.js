'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'comentarios',
      {
        id: { type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        comentario: { type: Sequelize.DataTypes.TEXT, allowNull: false },
        publicacoes_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'publicacoes'
            },
            key: 'id'
          }
        },
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
    return queryInterface.dropTable('comentarios')
  }
};
