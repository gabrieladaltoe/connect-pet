const {Amizade,sequelize } = require('../database/models');
const {Op,QueryTypes} = require('sequelize');
const SocialController = {
		index: (req, res) => {
			res.render('index');
		},
		profile : (req,res) => {
			res.render('user-profile');
		},
		viewUsers : async (req,res) => {
			const id = req.session.usuario.id;
			let nome = req.query.buscaUsuario;

			let query = "select P.id, P.nome, P.img_user, p.usuarios_id from perfis p where p.usuarios_id <> :USER and p.usuarios_id not in (SELECT usuarios_S_id FROM amizades where usuarios_P_id = :USER) " ;
			console.log(nome);
			if(nome)
			{
				query += " and P.nome LIKE :NOME ";
			}
            const amigosA = await sequelize.query(query, { replacements: {USER: id, 
				                                                          NOME: nome}, type: QueryTypes.SELECT });	
			
			res.status(201).render('amigos', {amigosA:amigosA, nome});
			//res.render('mostarusuarios', {amigosA});
		},
		seguirAmigos: async (req, res) =>{
			let id = req.params.id;

			console.log("id usuario perfilo" + id);
			
			let resultado = await Amizade.create({data:new Date(),
					usuarios_P_id: req.session.usuario.id,
					usuarios_S_id: id
				});
				console.log(resultado);		
				res.redirect("/usuarios");		
		},
		quemSomos : (req,res) => {
			res.render('contato');
		}
		
	}
	module.exports = SocialController;

	