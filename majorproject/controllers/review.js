const {reviewschema}=require("../schema");
const Review=require("../models/reviews");
const listing = require("../models/listing");

module.exports.postreview=async(req,res)=>{
    let id=req.params.id;
    let newlisting=await listing.findById(id);
    let newreview=new Review(req.body.review);
    newreview.author=req.user._id;
    console.log(newreview);
    newlisting.reviews.push(newreview);

    await newreview.save();
    await newlisting.save();
    req.flash("success","new review added successfully!");
    console.log(newlisting);
    res.redirect(`/listings/${newlisting._id}`);

}

module.exports.deletereview=async (req,res)=>{
    let id=req.params.id;
    let reviewId=req.params.reviewId;
    let review = await Review.findById(reviewId);
    console.log(review);
    if(!review.author._id.equals(req.user._id)){
        req.flash("error","You dont have permission to delete review");
        return res.redirect(`/listings/${id}`);
    }
    console.log(`reviewid:${reviewId}`);
    console.log(`listingid:${id}`);
    await listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("delete","review deleted successfully!");
    res.redirect(`/listings/${id}`);


}