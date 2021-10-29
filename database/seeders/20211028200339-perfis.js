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
        img_user: "https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fwww.proteste.org.br%2Fanimais-de-estimacao%2Fgatos%2Fnoticia%2Fgatos-tem-medo-de-pepino&psig=AOvVaw2ZhLzA46jupyLfuD-F-Iux&ust=1635545696936000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjps9mQ7vMCFQAAAAAdAAAAABAD",
        usuarios_id: 1
      },
      {
        id: 2,
        nome: 'Bob',
        biografia: 'Me chamo Bob',
        localizacao: 'Belém-PA',
        website: 'bob.com.br',
        img_user: "https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fseres.vet%2Fblog%2Fcomo-dar-remedio-de-verme-para-gato%2F&psig=AOvVaw2ZhLzA46jupyLfuD-F-Iux&ust=1635545696936000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjps9mQ7vMCFQAAAAAdAAAAABAJ",
        usuarios_id: 2
      },
      {
        id: 3,
        nome: 'Fúria',
        biografia: 'Me chamo Fúria',
        localizacao: 'Belém-PA',
        website: 'furia.com.br',
        img_user: "https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fwww.petz.com.br%2Fblog%2Fbem-estar%2Fcachorro-de-orelha-em-pe%2F&psig=AOvVaw3RxtTuk4oRVQQbN8aS4m62&ust=1635545890618000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiZiLSR7vMCFQAAAAAdAAAAABAD",
        usuarios_id: 3
      },
      {
        id: 4,
        nome: 'Tob',
        biografia: 'Me chamo Tob',
        localizacao: 'Belém-PA',
        website: 'tob.com.br',
        img_user: "https://www.google.com.br/url?sa=i&url=https%3A%2F%2Frevistacasaejardim.globo.com%2FCasa-e-Jardim%2FDicas%2FPets%2Fnoticia%2F2017%2F05%2F15-sinais-mostram-que-o-seu-cachorro-esta-doente.html&psig=AOvVaw3RxtTuk4oRVQQbN8aS4m62&ust=1635545890618000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiZiLSR7vMCFQAAAAAdAAAAABAJ",
        usuarios_id: 4
      },
      
    ])
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('perfis', null, {})
  }
};
