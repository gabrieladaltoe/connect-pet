'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'usuarios',
      {
        id: { type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nome: { type: Sequelize.DataTypes.STRING(45), allowNull: false },
        nome_usuario: { type: Sequelize.DataTypes.STRING(45), allowNull: false },
        email: { type: Sequelize.DataTypes.STRING(45), allowNull: false },
        senha: { type: Sequelize.DataTypes.STRING(256), allowNull: false }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios')
  }
};
