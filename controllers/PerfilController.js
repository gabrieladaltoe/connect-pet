const {Usuario, Perfil} = require('../database/models');

module.exports = {
	perfil: async (req, res)=>{

		const id = 1 //req.session.id // req.params.id // sessionStorage.getItem('id')
		const perfil = await Perfil.findOne({where:{usuarios_id:id}})

		let my_perfil = perfil.toJSON()

		res.status(201).render('perfil', {my_perfil})
	},
	registrarPerfil: async (req,res) =>{
		const {nome, biografia, localizacao, website, img_user} = req.body;
		
		try
        {
            let my_perfil = await Perfil.create({nome:nome, 
				                                 biografia:biografia, 
												 localizacao:localizacao, 
												 website:website, 
												 img_user:img_user,
												 usuarios_id: 8})
												 .then(function(){
													res.send("Perfil cadastrado com sucesso!")
												 })
												 .catch(function(error){
													res.send('Ocorreu um erro', error)
												 })
			return res.status(201).json(my_perfil).redirect('/perfil');
        }
        catch(error){
            return res.status(409).json({error:1,msg:"Perfil ja cadastrado com esse nome"});
        }

	}
}