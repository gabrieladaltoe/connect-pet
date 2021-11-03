const {Perfil} = require('../database/models');
const fs = require("fs");
const path = require('path');

module.exports = {
	showPerfil: async(req, res)=>{
		console.log("entrou aki");
		let perfil = await Perfil.findAll({where:{usuarios_id: req.session.usuario}})
		if (perfil) {
			res.render("editar-perfil", {perfil});
		} else {
			return res.redirect("/feed");
		}
	
	},
	registrarPerfil:async(req,res) =>{
		const {nome, biografia, localizacao, website, img_user} = req.body;		
		try
        {
            let resultado = await Perfil.create({nome:nome, 
												 biografia:biografia, 
												 localizacao:localizacao, 
												 website:website, 
												 img_user:img_user,
												 usuarios_id:req.session.usuario});
												 
            return res.redirect("/feed");
        }
        catch(error){
			return console.log(error)
           // return res.status(409).json({error:1,msg:"Perfil ja cadastrado com esse nome"});
        }

	}
}