'use strict';
const bcrypt = require('bcrypt')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('amizades', [
      {
        id: 1,
        data: new Date(),
        usuarios_P_id: 1,
        usuarios_S_id: 2,
      },
      {
        id: 2,
        data: new Date(),
        usuarios_P_id: 1,
        usuarios_S_id: 3,
      },
      {
        id: 3,
        data: new Date(),
        usuarios_P_id: 1,
        usuarios_S_id: 4,
      },
      {
        id: 4,
        data: new Date(),
        usuarios_P_id: 2,
        usuarios_S_id: 1,
      },
      {
        id: 5,
        data: new Date(),
        usuarios_P_id: 2,
        usuarios_S_id: 3,
      },
      {
        id: 6,
        data: new Date(),
        usuarios_P_id: 2,
        usuarios_S_id: 4,
      },
      {
        id: 7,
        data: new Date(),
        usuarios_P_id: 3,
        usuarios_S_id: 1,
      },
      {
        id: 8,
        data: new Date(),
        usuarios_P_id: 3,
        usuarios_S_id: 2,
      },
      {
        id: 9,
        data: new Date(),
        usuarios_P_id: 3,
        usuarios_S_id: 4,
      },
      {
        id: 10,
        data: new Date(),
        usuarios_P_id: 4,
        usuarios_S_id: 1,
      },
      {
        id: 11,
        data: new Date(),
        usuarios_P_id: 4,
        usuarios_S_id: 2,
      },
      {
        id: 12,
        data: new Date(),
        usuarios_P_id: 4,
        usuarios_S_id: 3,
      },
    ])
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('amizades', null, {})
  }
};