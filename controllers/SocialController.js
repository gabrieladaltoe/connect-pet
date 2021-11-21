//const {Publicacao} = require('../database/models');
const SocialController = {
		index: (req, res) => {
			res.render('index');
		},
		feed: async (req, res) => {
			res.render('feed');
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

	