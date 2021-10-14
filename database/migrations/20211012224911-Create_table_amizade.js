'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'amizade',
      {
        id: { type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        data: { type: Sequelize.DataTypes.DATE, allowNull: false },
        usuario_P_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'usuarios'
            },
            key: 'id'
          }
        },
        usuario_S_id: {
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
    return queryInterface.dropTable('amizade')
  }
};
