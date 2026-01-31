const express=require("express");
const router=express.Router({mergeParams:true});
const wrapasync=require("../utils/wrapasync");
const Expresserror=require("../utils/Expresserror");
const methodOverride = require("method-override");
const reviewcontroller=require("../controllers/review.js");
const {isLoggedIn}=require("../middleware.js");
const {reviewschema}=require("../schema");
// middleware post route
const validatereview=(req,res,next)=>{
    const { error } = reviewschema.validate(req.body);  
        if (error) {
        throw new Expresserror(400, error.details[0].message); 
        }
        else{
            next();
        }
}
// review post route
router.post("/",validatereview,isLoggedIn,wrapasync(reviewcontroller.postreview))

// reviews delete route
router.delete("/:reviewId",isLoggedIn,wrapasync(reviewcontroller.deletereview))

module.exports=router;
