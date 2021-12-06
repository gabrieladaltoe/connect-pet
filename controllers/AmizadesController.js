const {Usuario, Perfil, Amizade, sequelize} = require('../database/models');
const {QueryTypes} = require('sequelize');
module.exports = {
	exibirAmigos: async (req, res)=>{
        let nome = req.query.buscaUsuario;
        const id = req.session.usuario.id;
        let query = "select p.id, p.nome, p.img_user, p.usuarios_id from amizades a inner join perfis p on (a.usuarios_S_id = p.usuarios_id) where a.usuarios_P_id = :user " ;
        if(nome)
        {
                query += " and P.NOME LIKE :NOME  group by a.usuarios_S_id ";
        }
        else
        {
                query += " group by a.usuarios_S_id"
        }
        const amigosA = await sequelize.query(query, { replacements: {user: id, NOME: nome}, type: QueryTypes.SELECT });


       
               
        res.status(201).render('mostarUsuarios', {amigosA:amigosA, nome});
	},

        excluirAmigos:async (req, res)=>{
                let id = req.params.id;
                let result = await Amizade.destroy({ where: { usuarios_P_id: req.session.usuario.id , usuarios_S_id: id} })
		/*let resultado = await sequelize.query("Delete from amizades where usuarios_P_id = :usuarioP and usuarios_S_id = :usuarioS",
                                                     { replacements: {usuarioP: req.session.usuario.id, usuarioS: id}, type: QueryTypes.SELECT });
					*/
		res.redirect("/amizades");	
        }
}