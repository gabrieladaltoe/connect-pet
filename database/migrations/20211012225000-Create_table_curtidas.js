'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'curtidas',
      {
        id: { type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        data: { type: Sequelize.DataTypes.DATE, allowNull: false },
        usuarios_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'usuarios'
            },
            key: 'id'
          }
        },
        publicacoes_id: {
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
    return queryInterface.dropTable('curtidas')
  }
};
