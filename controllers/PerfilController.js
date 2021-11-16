const {Perfil} = require('../database/models');
const fs = require("fs");
const path = require('path');

module.exports = {
	perfil: async (req, res)=>{
		console.log(req.body)
		//res.redirect('/perfil');
	},
	registrarPerfil: async (req,res) =>{
		const {nome, biografia, localizacao, website, img_user} = req.body;
		try
        {
            let resultado = await Perfil.create({nome:nome, 
				                                 biografia:biografia, 
												 localizacao:localizacao, 
												 website:website, 
												 img_user:img_user});
            //return res.status(201).json(resultado);
			return res.status(201).redirect('/perfil');
        }
        catch(error){
            return res.status(409).json({error:1,msg:"Perfil ja cadastrado com esse nome"});
        }

	}
}