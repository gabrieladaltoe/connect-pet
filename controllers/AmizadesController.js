const {Usuario, Perfil} = require('../database/models');

module.exports = {
	exibirAmigos: async (req, res)=>{

        const amigos = await Usuario.findAll({include:['amigos']});
        const amigosP = await Perfil.findAll();
        
        console.log(amigos)
        res.status(201).render('mostarUsuarios', {usuario:req.session.usuario,amigos:amigos, amigosP:amigosP, perfil:req.session.user});
	},
}