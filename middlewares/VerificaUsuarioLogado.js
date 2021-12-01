module.exports = (req, res, next) => {
    if(req.session.user){
        //res.redirect("/feed")
        next();
    } else {
        res.redirect("/");
    }
}