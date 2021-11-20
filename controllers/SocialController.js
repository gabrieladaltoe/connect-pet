const { Perfil } = require('../database/models');
const SocialController = {
		index: (req, res) => {
			res.render('index');
		},
		profileUser : (req,res) => {
			res.render('user-profile');
		},
		viewUsers : (req,res) => {
			res.render('mostarusuarios');
		},
		editProfile : (req,res) => {
			res.render('editar-perfil');
		}
		
	}
	module.exports = SocialController;

	