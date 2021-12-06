const {Usuario,Perfil,Publicacao,Comentario,Curtida,sequelize } = require('../database/models');
const {Op,QueryTypes} = require('sequelize');

module.exports = {
    feed: async (req, res) => {
       
        const users = await sequelize.query("select pu.id, pu.img_pub, pu.texto, pu.usuarios_id, pe.nome, pu.data, pe.img_user from publicacoes pu inner join perfis pe on pu.usuarios_id = pe.usuarios_id where pu.usuarios_id in (select usuarios_S_id from amizades where usuarios_P_id = :USER) union all select pu.id, pu.img_pub, pu.texto,  pu.usuarios_id, pe.nome, pu.data, pe.img_user from publicacoes pu inner join perfis pe on pu.usuarios_id = pe.usuarios_id where  pu.usuarios_id = :USER order by data desc", 
        { replacements: {USER: req.session.usuario.id},  type: QueryTypes.SELECT  });
        console.log("entrou aki no feed")


        const perfil = await Perfil.findAll({ where: { [Op.not]: { usuarios_id: req.session.usuario.id } }});

        return res.render('feed', { usuario: req.session.usuario, public: users, perfil: req.session.user })

        
        
    },
    feedById: async (req, res) => {
        const { id } = req.params
        let usuarios = await Usuario.findByPk(id)
        return res.render('feed', { usuarios });
    },
    post: async (req, res) => {
        const id = req.session.usuario.id
        const perfilImg = await Perfil.findOne({where: {id}})
        const { insertPost } = req.body;
        const {filename} = req.file
        
        
        try
        {
            let resultadoPub = await Publicacao.create({
                texto:insertPost, 
                img_pub: filename,
                usuarios_id: id,
                data: new Date()
                                                  
            },{
                where:{ usuarios_id: id }
            });
        }
        catch(error)
        {
            console.log("Erro ao cadastrar usuário" + console.error());
        }
        console.log(req.file)
        console.log(req.body)
        console.log(id)
        
        res.redirect("/feed");	
       // return res.status(201).render('feed');
    }         
//     post: async(req, res) => {
//         const id = req.session.usuario.id
// 		console.log(id)
// 		const { nome_cad, nome_usuario_cad, email_cad, senha_cad } = req.body;
//         let resultadoPub = await Publicacao.create({
//             texto: insert-post,
//             img_pub: req.file.path,
//             usuarios_id: id

//         },{
//             where:{ usuarios_id: id }
//         });
// return res.status(201).redirect('/feed');
            
        
//         console.log(req.body)
//         const {filename} = req.file
        
//         console.log(req.file)
//     },
}