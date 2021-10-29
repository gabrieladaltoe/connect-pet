'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('curtidas', [
      {
        id: 1,
        data: new Date(),
        usuarios_id: 2,
        publicacoes_id:1
      },
      {
        id: 2,
        data: new Date(),
        usuarios_id: 2,
        publicacoes_id:1
      },
      {
        id: 3,
        data: new Date(),
        usuarios_id: 3,
        publicacoes_id:2
      },
      {
        id: 4,
        data: new Date(),
        usuarios_id: 4,
        publicacoes_id:3
      },
      {
        id: 5,
        data: new Date(),
        usuarios_id: 1,
        publicacoes_id:4
      },
     
      
      
    ])
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('curtidas', null, {})
  }
};

