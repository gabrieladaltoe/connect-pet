const {Publicacao} = require('../database/models');
const SocialController = {
		index: (req, res) => {
			res.render('index');
		},
		feed: async (req, res) => {
			res.render('feed');
		},
		profileUser : (req,res) => {
			res.render('user-profile');
		},
		viewUsers : (req,res) => {
			res.render('listar-usuarios');
		},
		editProfile : (req,res) => {
			res.render('editar-perfil');
		}
		
	}
	module.exports = SocialController;

	