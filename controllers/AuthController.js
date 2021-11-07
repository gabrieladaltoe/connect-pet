const {Usuario} = require('../database/models');
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    showLogin: (req, res) => {

        res.redirect('/login', {
            error: null
        });
    },
    login: async (req, res) => {
        const {email_login, senha_login } = req.body;
        const usuario = await Usuario.findOne({where:{email_login}});
        
        if (!usuario) {
            return res.redirect("/login");
        }
      
        if(!bcrypt.compareSync(senha_login, usuario.senha) || !usuario){
           return res.redirect("/");
        }

        // gerar o token
        usuario.senha = undefined;
        let token = jwt.sign(usuario.toJSON(), "connectpet");   
        return res.redirect("/feed");
    },
    logout: (req,res) =>
    {
        req.session.destroy();
        res.redirect("/");
    }
}