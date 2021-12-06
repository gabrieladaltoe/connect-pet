const {sequelize, Perfil} = require('../database/models');
const {Op,QueryTypes} = require('sequelize');
module.exports = {
	perfil: async (req, res)=>{
		const id = req.session.usuario.id 
		const my_perfil = await Perfil.findOne({where:{usuarios_id:id}})
		let perfil = my_perfil.toJSON()

		res.status(201).render('perfil', {perfil:perfil})  
	},
	editar: async (req,res) =>{

		const id = req.session.usuario.id
		console.log(id)
		const {input_nome, biografia, localizacao, website, img_user} = req.body;
		
		try
        {
            let perfil = await Perfil.update({	nome: input_nome, 
													biografia: biografia,
													localizacao: localizacao, 
													website: website, 
													img_user: img_user,
													usuarios_id: id 
												},{
													where:{ usuarios_id: id }
												})
												.then(function(){
													res.status(204).render('feed', {perfil})//.send("Perfil atualizado com sucesso!")
												})
												.catch(function(error){
													res.send('Ocorreu um erro', error)
												})
        }
        catch(error){
            return res.status(409).json({error:1,msg:"Perfil ja cadastrado com esse nome"});
        }

	},
	exibirPerfil: async(req,res)=>{

		const id = req.session.usuario.id 
		const perfil = await Perfil.findOne({where:{usuarios_id:id}})
		const publicacao = await sequelize.query("select pu.id, pu.texto, pu.img_pub from publicacoes pu where pu.usuarios_id = :USER", { replacements: {USER: id}, type: QueryTypes.SELECT });


		res.status(201).render('user-profile', {perfil, publicacao})
	}
}