'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('usuarios', [
      {
        id: 1,
        nome: 'Marcelo Alves',
        nome_usuario: 'Marcelo_10',
        email: 'marcelo@dh.com',
        senha: bcrypt.hashSync('123456', 10)
      },
      {
        id: 2,
        nome: 'Camila',
        nome_usuario: 'Camila_20',
        email: 'camila@dh.com',
        senha: bcrypt.hashSync('123456', 10)
      },
      {
        id: 3,
        nome: 'Gabi',
        nome_usuario: 'Gabi_30',
        email: 'gabi@dh.com',
        senha: bcrypt.hashSync('123456', 10)
      },
      {
        id: 4,
        nome: 'Alexandre',
        nome_usuario: 'Alexandre_40',
        email: 'alexandre@dh.com',
        senha: bcrypt.hashSync('123456', 10)
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('usuarios', null, {})
  }
};
