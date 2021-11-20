'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('publicacoes', [
      {
        id: 1,
        texto: 'Me chamo Pretinha',
        img_pub: "https://www.petz.com.br/blog/wp-content/uploads/2017/04/comportamento-dos-gatos-1.jpg",
        usuarios_id: 1,
        data: new Date()
      },
      {
        id: 2,
        texto: 'Me chamo Bob',
        img_pub: "https://s2.glbimg.com/_bDnKvOpodO6FkZL8zJ0BFDtyAA=/e.glbimg.com/og/ed/f/original/2020/10/30/jamie-street-utre5dcgeyg-unsplash.jpg",
        usuarios_id: 2,
        data: new Date()
        
      },
      {
        id: 3,
        texto: 'Me chamo Fúria',
        img_pub: "https://conteudo.imguol.com.br/c/entretenimento/fd/2021/01/04/gato-1609773071379_v2_1170x540.jpg.webp",
        usuarios_id: 3,
        data: new Date()
        
      },
      {
        id: 4,
        texto: 'Me chamo Tob',
        img_pub: "https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg",
        usuarios_id: 4,
        data: new Date()
        
      },
      
    ])
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('publicacoes', null, {})
  }
};

