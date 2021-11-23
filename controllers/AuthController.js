const {Usuario, Perfil} = require('../database/models');
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    showLogin: (req, res) => {
        res.redirect('/', {
            error: null
        });
    },
    login: async (req, res) => {
        const {email_login, senha_login } = req.body;
        const usuario = await Usuario.findOne({where:{email:email_login}});
        
        if(!bcrypt.compareSync(senha_login, usuario.senha) || !usuario){
            return res.status(401).json({error:2,msg:"Usuário ou senha inválidos"});
        }
       
        // gerar o token
        usuario.senha = undefined;
        let token = jwt.sign(usuario.toJSON(),"connectpet");

        //const id = req.session.usuario.id // 1 //req.body //req.session.id // req.params.id // sessionStorage.getItem('id')
		const perfil = await Perfil.findOne({where:{usuarios_id:usuario.id}})
		let my_perfil = perfil.toJSON()

        req.session.user = my_perfil
        req.session.usuario = usuario.toJSON()

        return res.redirect("/feed");
    },
    logout: (req,res) =>
    {
        req.session.destroy();
        res.redirect("/");
    }
}