'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'publicacoes',
      {
        id: { type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        texto: { type: Sequelize.DataTypes.TEXT, allowNull: false },
        data: { type: Sequelize.DataTypes.DATE, allowNull: false },
        img_pub: Sequelize.DataTypes.BLOB,
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
    return queryInterface.dropTable('publicacoes')
  }
};
