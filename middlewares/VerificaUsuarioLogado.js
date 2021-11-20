function auth(req, res, next) {
    if(typeof(req.session.usuario) != "underfined"){
        return next();
    } else {
        return res.send("não esta logado")
    }
}

module.exports = auth