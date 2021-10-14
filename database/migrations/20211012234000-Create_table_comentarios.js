'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'comentarios',
      {
        id: { type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        comentario: { type: Sequelize.DataTypes.TEXT, allowNull: false },
        publicacao_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'publicacoes'
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
