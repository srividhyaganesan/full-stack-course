const express=require("express");
const router=express.Router();
const User=require("../models/users");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const {saveredirectUrl}=require("../middleware");
const usercontroller=require("../controllers/users.js");

router.route("/signups")
.get(usercontroller.signup)
.post(usercontroller.postsignup)

router.route("/login")
.get(usercontroller.login)
.post(saveredirectUrl,passport.authenticate('local',{failureRedirect:'/login',failureFlash:true}),usercontroller.postlogin)


// logout the user
router.get("/logout",usercontroller.logout)
module.exports=router;