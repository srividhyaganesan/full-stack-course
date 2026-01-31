const User=require("../models/users");

module.exports.signup=(req,res)=>{
    res.render("users/signup.ejs");
}

module.exports.postsignup=async (req,res)=>{
    try{
    let username=req.body.Username;
    let password=req.body.Password;
    let email=req.body.Emailid;
    const newuser=new User({username,email});
    const registered_user=await User.register(newuser,password);
    console.log(registered_user);
    req.login(registered_user, (err)=>{
        if(err){
            return next(err);

        }
        req.flash("success","user registered successfully!");
        return res.redirect("/listings");
    })
    }
    catch(e){
        req.flash("error",e.message);
        res.redirect("/signups");
    }


}

module.exports.login=(req,res)=>{
    res.render("users/login.ejs");
}

module.exports.postlogin=async (req,res)=>{
    req.flash("success", "Welcome to Wanderlust, You are logged in!");
    console.log("redirect url:",res.locals.redirectUrl);
    const redirectUrl = res.locals.redirectUrl || "/listings";
    delete req.session.redirectUrl;
    res.redirect(redirectUrl);

}

module.exports.logout=(req,res,next)=>{
    req.logOut((err)=>{
        if(err){
            return next(err);

        }
        req.flash("success","You are logged out!");
        res.redirect("/listings");
    })
}