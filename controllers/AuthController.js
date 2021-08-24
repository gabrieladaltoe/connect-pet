const usuarios = require('../database/Usuarios.json');
const bcrypt =  require('bcrypt');

module.exports = {
    showLogin: (req, res) => {

        res.render("index", {
            error: null
        });
    },
    login: async (req, res) => {

        //capturar email e senha enviados
        const {
            email,
            senha
        } = req.body;


        // buscar no array de usuarios um usuario que tenha email igual
        //verifico se a senha é igual a do usuario cadastrado

        const usuario = usuarios.filter(u => u.email == email);

        if (usuario.length) {
            const usuarioOK = await bcrypt.compare(senha, usuario[0].senha);
            if(usuarioOK){
                return res.render("feed")
            }
        }

        return res.redirect('/admin/login?err=1'); //
    }
}