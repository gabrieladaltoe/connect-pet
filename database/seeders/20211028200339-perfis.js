'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('perfis', [
      {
        id: 1,
        nome: 'Pretinha',
        biografia: 'Me chamo Pretinha',
        localizacao: 'Belém-PA',
        website: 'pretinha.com.br',
        img_user: "https://www.petz.com.br/blog/wp-content/uploads/2017/04/comportamento-dos-gatos-1.jpg",
        usuarios_id: 1,
      },
      {
        id: 2,
        nome: 'Bob',
        biografia: 'Me chamo Bob',
        localizacao: 'Belém-PA',
        website: 'bob.com.br',
        img_user: "https://s2.glbimg.com/_bDnKvOpodO6FkZL8zJ0BFDtyAA=/e.glbimg.com/og/ed/f/original/2020/10/30/jamie-street-utre5dcgeyg-unsplash.jpg",
        usuarios_id: 2,
      },
      {
        id: 3,
        nome: 'Fúria',
        biografia: 'Me chamo Fúria',
        localizacao: 'Belém-PA',
        website: 'furia.com.br',
        img_user: "https://conteudo.imguol.com.br/c/entretenimento/fd/2021/01/04/gato-1609773071379_v2_1170x540.jpg.webp",
        usuarios_id: 3,
      },
      {
        id: 4,
        nome: 'Tob',
        biografia: 'Me chamo Tob',
        localizacao: 'Belém-PA',
        website: 'tob.com.br',
        img_user: "https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg",
        usuarios_id: 4,
      },
      
    ])
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('perfis', null, {})
  }
};
