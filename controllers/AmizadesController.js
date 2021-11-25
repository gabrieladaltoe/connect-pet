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
        console.log("amigosA")
              console.log(amigosA)  
  
  
        for (const amigo of amigosA) {
                
        const amigosP = await Perfil.findOne({ where: {usuarios_id:amigo.toJSON().usuarios_S_id}});
        console.log("amigop")
        console.log(amigosP) 
        //amigo {z,z}
        Object.assign(amigo,amigosP.toJSON())
        
                // amigosP.find(p => p.)
                
        }
        
        console.log(amigosA)
        // console.log(amigos.amigos[0].amizades)
        
        res.status(201).render('mostarUsuarios', {usuario:req.session.usuario,amigosA:amigosA, perfil:req.session.user});
	},
}