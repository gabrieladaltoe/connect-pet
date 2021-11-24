//const {Publicacao} = require('../database/models');
const SocialController = {
		index: (req, res) => {
			res.render('index');
		},
		profile : (req,res) => {
			res.render('user-profile');
		},
		viewUsers : (req,res) => {
			res.render('mostarusuarios');
		},
		quemSomos : (req,res) => {
			res.render('contato');
		}
		
	}
	module.exports = SocialController;

	