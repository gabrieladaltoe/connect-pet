'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('comentarios', [
      {
        id: 1,
        comentario: "comentario 1",
        publicacoes_id: 1,
        usuarios_id:2
      },
      {
        id: 2,
        comentario: "comentario 2",
        publicacoes_id: 2,
        usuarios_id:3
      },
      {
        id: 3,
        comentario: "comentario 3",
        publicacoes_id: 3,
        usuarios_id:4
      },
      {
        id: 5,
        comentario: "comentario 5",
        publicacoes_id: 4,
        usuarios_id:1
      },
      
     
      
      
    ])
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('comentarios', null, {})
  }
};

