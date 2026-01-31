module.exports.isLoggedIn= (req,res,next)=>{
     if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        if (req.session.redirectUrl.includes("/reviews")) {
      req.session.redirectUrl = req.session.redirectUrl.split("/reviews")[0];
    }
        req.flash("error","Please log in first");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveredirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}