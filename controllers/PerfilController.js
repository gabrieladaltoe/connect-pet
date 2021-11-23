const {Usuario, Perfil} = require('../database/models');

module.exports = {
	perfil: async (req, res)=>{

		// const id = req.session.usuario.id // 1 //req.body //req.session.id // req.params.id // sessionStorage.getItem('id')
		// const perfil = await Perfil.findOne({where:{usuarios_id:id}})
		// let my_perfil = perfil.toJSON()

		res.status(201).render('perfil', { my_perfil: req.session.user })
	},
	editar: async (req,res) =>{

		const id = req.session.usuario.id
		const {input_nome, biografia, localizacao, website, img_user} = req.body;
		
		try
        {
            let my_perfil = await Perfil.update({	nome: input_nome, 
													biografia: biografia,
													localizacao: localizacao, 
													website: website, 
													img_user: img_user,
													usuarios_id: id 
												},{
													where:{ usuarios_id: id }
												})
												.then(function(){
													res.status(204).redirect('/perfil')//.send("Perfil atualizado com sucesso!")
												})
												.catch(function(error){
													res.send('Ocorreu um erro', error)
												})
        }
        catch(error){
            return res.status(409).json({error:1,msg:"Perfil ja cadastrado com esse nome"});
        }

	}
}