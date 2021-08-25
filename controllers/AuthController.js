const usuariosJson = require('../database/Usuarios.json');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    showLogin: (req, res)=>{
		res.render("index");
	},
    login: async (req,res)=>{
        const email  = req.body.email;
        const senha = req.body.senha;   

      //  console.log(bcrypt.hashSync('tartaruga',10))

      //  console.log(email + "-" + senha);         

     /*  let emailEncotrado = usuariosJson.find(element => (element.email == email));
       let senhaEncontrada = usuariosJson.find(element => (element.senha == senha));*/

       const usuario = usuariosJson.filter(u => u.email == email);
       if(usuario.length)
       {
           const usuarioOk = await  bcrypt.compare(senha,usuario[0].senha)
           if(usuarioOk)
           {
            console.log(jwt.sign(
            {
                email: usuario
            },
            "secret", 
            {expiresIn: 60 * 60}
            ))
            /*const cookie = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6W3sibm9tZSI6Ikxlb25hcmRvIiwiZW1haWwiOiJsZW9uYXJkb0BwaXp6YXJpYWZhbnRhc3RpY2EuY29tIiwic2VuaGEiOiIkMmIkMTAkb1p6cGlzR3l3WkFNemxqM3N4MDBTLkphT0Y3RUM3by5mUUF2QVVWVHFDZDZHaldpQ3J0TC4ifV0sImlhdCI6MTYyOTQxOTc3MSwiZXhwIjoxNjI5NDIzMzcxfQ.5c3yD4exSPwJCWXVWNBR-hasVw5gGqLvG2SpF2a-yMQ";
            console.log(jwt.verify(cookie, "secret"))*/

             return res.render("feed");
           }
       }
    return res.redirect("/?err=1");
        
    }
}