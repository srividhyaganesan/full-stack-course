const express=require("express");
const router=express.Router();
const User=require("../models/users");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const {saveredirectUrl}=require("../middleware");

router.get("/signups",(req,res)=>{
    res.render("users/signup.ejs");
})

router.post("/signups",async (req,res)=>{
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


})


router.get("/login",(req,res)=>{
    res.render("users/login.ejs");
})

router.post("/login",saveredirectUrl,passport.authenticate('local',{failureRedirect:'/login',failureFlash:true}),async (req,res)=>{
    req.flash("success", "Welcome to Wanderlust, You are logged in!");
    console.log(req.session.redirectUrl);
    const redirectUrl = res.locals.redirectUrl || "/listings";
    delete req.session.redirectUrl;
    res.redirect(redirectUrl);

})

router.get("/logout",(req,res,next)=>{
    req.logOut((err)=>{
        if(err){
            return next(err);

        }
        req.flash("success","You are logged out!");
        res.redirect("/listings");
    })
})
module.exports=router;