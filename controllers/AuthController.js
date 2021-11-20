const {Usuario,Perfil,Publicacao,Comentario,Curtida} = require('../database/models');
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {
    showLogin: (req, res) => {

        return res.render("index", {
            error: null
        });
    },
    login: async (req, res) => {
        const { email, senha } = req.body;
        const usuario = await Usuario.findOne({ where: { email } });
       
        
        if (!bcrypt.compareSync(senha, usuario.senha) || !usuario) {
            return res.redirect("/");
        }
        //     // gerar o token
        usuario.senha = undefined;
        let token = jwt.sign(usuario.toJSON(), "connectpet");
        

        if (usuario) {
            req.session.usuario = JSON.stringify(usuario);
            req.session.usuario = usuario
            return res.redirect("/feed");

            // return res.redirect("/feed");
        } else {
            return res.render("/", { error: "Login/Senha inválidos" });

        }
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
            let usuario = await Usuario.create({nome:nome, 
                                                  nome_usuario: nome_usuario,
                                                  email: email,
                                                  senha:bcrypt.hashSync(senha, 10)
                                                });
                                                req.session.usuario = usuario
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