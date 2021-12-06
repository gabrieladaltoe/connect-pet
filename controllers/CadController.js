const {Usuario, Perfil} = require('../database/models');
const bcrypt =  require('bcrypt');

module.exports = {
    registrar: async (req, res) => {
        const { nome_cad, nome_usuario_cad, email_cad, senha_cad } = req.body;
        
       // try
      //  {
            let resultado = await Usuario.create({nome:nome_cad, 
                                                  nome_usuario: nome_usuario_cad,
                                                  email: email_cad,
                                                  senha:bcrypt.hashSync(senha_cad, 10)
            });

            req.session.usuario = resultado.toJSON()

            let resultadoPerfil = await Perfil.create({nome:nome_cad,  
                                                       biografia:" ",               
                usuarios_id:resultado.id});      


            return res.status(201).redirect('/dadosperfil');
     /*   }
        catch(error)
        {
            console.log("Erro ao cadastrar usuário" + console.error());
        }*/
    }         
}