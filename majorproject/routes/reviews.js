const express=require("express");
const router=express.Router({mergeParams:true});
const wrapasync=require("../utils/wrapasync");
const Expresserror=require("../utils/Expresserror");
const methodOverride = require("method-override");
const {reviewschema}=require("../schema");
const Review=require("../models/reviews");
const listing = require("../models/listing");


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
router.post("/",validatereview,wrapasync(async(req,res)=>{
    let id=req.params.id;
    let newlisting=await listing.findById(id);
    let newreview=new Review(req.body.review);
    newlisting.reviews.push(newreview);

    await newreview.save();
    await newlisting.save();
    req.flash("success","new review added successfully!");
    console.log(newlisting);
    res.redirect(`/listings/${newlisting._id}`);

}))

// reviews delete route
router.delete("/:reviewId",wrapasync(async (req,res)=>{
    let id=req.params.id;
    let reviewId=req.params.reviewId;
    console.log(`reviewid:${reviewId}`);
    console.log(`listingid:${id}`);
    await listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("delete","review deleted successfully!");
    res.redirect(`/listings/${id}`);


}))

module.exports=router;
