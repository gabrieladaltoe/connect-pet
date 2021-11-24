const {Usuario, Perfil, Amizade} = require('../database/models');

module.exports = {
	exibirAmigos: async (req, res)=>{

        // const amigos = await Usuario.findOne({
        //         where: {id:req.session.usuario.id},
        //         include:{
        //         as:'amigos',
        //         model: Amizade,
        //         where: {usuarios_P_id:req.session.usuario.id}
        
        const amigosA = await Amizade.findAll({ where: {usuarios_P_id:req.session.usuario.id}});
        const amigosP = await Perfil.findAll({ where: {nome:req.session.usuario.id}});

        
        
        // console.log(amigos.amigos[0].amizades)
        console.log(amigosP)
        res.status(201).render('mostarUsuarios', {usuario:req.session.usuario,amigosA:amigosA,amigosP:amigosP, perfil:req.session.user});
	},
}