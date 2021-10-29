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

        return res.redirect('/admin'); //
    },
    registrar: async(req, res) =>
    {
        console.log("entrou aki");
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
            console.log("erro ao cadastrar usuário");
        }
   
    }         
}