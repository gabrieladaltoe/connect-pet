'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('comentarios', [
      {
        id: 1,
        comentario: "comentario 1",
        data: new Date(),
        publicacoes_id: 1,
        usuarios_id:2
      },
      {
        id: 2,
        comentario: "comentario 2",
        data: new Date(),
        publicacoes_id: 2,
        usuarios_id:3
      },
      {
        id: 3,
        comentario: "comentario 3",
        data: new Date(),
        publicacoes_id: 3,
        usuarios_id:4
      },
      {
        id: 5,
        comentario: "comentario 5",
        data: new Date(),
        publicacoes_id: 4,
        usuarios_id:1
      },
      
     
      
      
    ])
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('comentarios', null, {})
  }
};

