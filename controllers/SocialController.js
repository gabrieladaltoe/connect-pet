// const pizzas = require('../database/Pizzas.json');
const SocialController = {
		index: (req, res) => {
			res.render('index');
		},
		feed: (req, res) => {
			res.render('feed');
		},
		listarUsuarios: (req, res) => {
			res.render('listar-usuarios');
		},
		profileUser : (req,res) => {
			res.render('user-profile');
		},
		viewUsers : (req,res) => {
			res.render('listar-usuarios');
		}
		
	}
	module.exports = SocialController;

	