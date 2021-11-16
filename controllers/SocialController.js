const {Publicacao} = require('../database/models');
const SocialController = {
		index: (req, res) => {
			res.render('index');
		},
		feed: async (req, res) => {
			res.render('feed');
		},
		profileUser : (req,res) => {
			res.render('perfil');
		},
		viewUsers : (req,res) => {
			res.render('listar-usuarios');
		},
		quemSomos : (req,res) => {
			res.render('contato');
		}
		
	}
	module.exports = SocialController;

	