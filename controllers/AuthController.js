const {Usuario} = require('../database/models');
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
        console.log("entrou aki login");
        if (!usuario) {
            return res.redirect("/admin");
            //return res.status(403).json({erro:1, msg: "Acesso negado"})
        }
        if(senha != usuario.senha)
        {
            return res.redirect("/admin");
        }
        /* comentado pois no banco esta sem criptografia
        if(!bcrypt.compareSync(senha, usuario.senha)){
           //return res.status(403).json({erro:1, msg:"Acesso negado"});
           return res.redirect("/admin");
        }*/

        // gerar o token
       usuario.senha = undefined;
        let token = jwt.sign(usuario.toJSON(), "connectpet");   
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
            return console.log(resultado);

        }
        catch(error)
        {
            console.log("erro ao cadastrar usuário" + console.error());
        }
    }
}