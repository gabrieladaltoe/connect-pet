const {Usuario, Perfil} = require('../database/models');
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    showLogin: (req, res) => {

        res.render("index", {
            error: null
        });
    },
    login: async (req, res) => {
        const {email, senha } = req.body;

        const usuario = await Usuario.findOne({where:{email}});
      /*  if (!usuario) {
            alert("Email Invalido");
            return res.redirect("/login");
        }*/
      
        if(!bcrypt.compareSync(senha, usuario.senha) || !usuario){
           return res.redirect("/");
        }

        // gerar o token
        usuario.senha = undefined;
        let token = jwt.sign(usuario.toJSON(), "connectpet");   
        req.session.usuario = JSON.stringify(usuario.id)
        return res.redirect("/feed");
    },
    registrar: async(req, res) =>
    {
        console.log(req);
        const {nome, nome_usuario, email, senha, senhaconfirm} = req.body;
        if(senha !== senhaconfirm)
        {
            return alert("Senha nao confere.");
        }
        try
        {
            let resultado = await Usuario.create({nome:nome, 
                                                  nome_usuario: nome_usuario,
                                                  email: email,
                                                  senha:bcrypt.hashSync(senha, 10)
                                                });
            // cria a session com o id do novo usuario
            req.session.usuario = JSON.stringify(resultado.id);

            let resultadoPerfil = await Perfil.create({nome:nome,                 
                                                       usuarios_id:resultado.id});                                                
                                                return res.redirect("/feed");

        }
        catch(error)
        {
            console.log("erro ao cadastrar usuário" + console.error());
        }
    }, 
    logout: (req,res) =>
    {
        req.session.destroy();
        res.redirect("/");
    }
}