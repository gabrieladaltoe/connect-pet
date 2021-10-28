const {Perfil} = require('../database/models');
const fs = require("fs");
const path = require('path');

module.exports = {
	editarPerfil: (req, res)=>{
		res.render("editar-perfil");
	},
	registrarPerfil:async(req,res) =>{
		const {nome, biografia, localizacao, website, img_user} = req.body;
		
		try
        {
            let resultado = await Perfil.create({nome:nome, 
				                                 biografia:biografia, 
												 localizacao:localizacao, 
												 website:website, 
												 img_user:img_user});
            return res.status(201).json(resultado);
        }
        catch(error){
            return res.status(409).json({error:1,msg:"Perfil ja cadastrado com esse nome"});
        }

	}
}