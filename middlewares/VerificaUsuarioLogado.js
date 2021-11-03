module.exports = (req, res, next) => {
    console.log(req.session.usuario)
    if(req.session.usuario){
        next();
    } else {
        res.redirect("/");
    }
}