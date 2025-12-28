const express=require("express");
const router=express.Router();
const wrapasync=require("../utils/wrapasync.js");
const Expresserror=require("../utils/Expresserror.js");
const methodOverride = require("method-override");
const {listingschema}=require("../schema.js");
const listing = require("../models/listing");
const flash=require("connect-flash");
const mongoose=require("mongoose");
const {isLoggedIn}=require("../middleware.js");

router.get("/:id/edit",isLoggedIn,async (req,res)=>{
    let id=req.params.id;
    let editpost=await listing.findById(id);
    res.render("editpost",{editpost});
})

router.patch("/:id",isLoggedIn,async (req,res)=>{
    let id=req.params.id;
    let newtitle=req.body.title;
    let newlocation=req.body.location;
    let newprice=req.body.price;
    let updateddata={
        title:newtitle,
        location:newlocation,
        price:newprice
    };
    await listing.findByIdAndUpdate(id,updateddata);
    req.flash("update","listing updated successfully!");
    res.redirect("/listings");
})
// create and add new route
router.get("/new",isLoggedIn,(req,res)=>{
    // by default authentication is false
    res.render("createlist");
})
router.post("/", isLoggedIn,wrapasync(async (req,res,next)=>{
        console.log("req received after post is",req.body);
        const { error } = listingschema.validate(req.body);  
        if (error) {
        throw new Expresserror(400, error.details[0].message); 
        }

        let title=req.body.listing.title;
        let desc=req.body.listing.desc;
        let location=req.body.listing.location;
        let price=req.body.listing.price;
        let url=req.body.listing.image.url;
        let filename=req.body.listing.image.filename;

        let newobj= {
            title:title,
            desc:desc,
            location:location,
            price:price,
            image:{
                filename:filename,
                url:url
            }
        };

        let newdata=new listing(newobj);
        newdata.owner=req.user._id;
        await newdata.save();
        req.flash("success","new listing added successfully!");
        res.redirect("/listings");
    }))


// get route based on id

router.get("/:id",async (req,res)=>{
    let id=req.params.id;
    console.log("id is",id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        req.flash("error", "Invalid listing ID!,Error in displaying list!");
        return res.redirect("/listings");
    }

    let getlist=await listing.findById(id).populate("reviews").populate("owner");
    console.log(getlist);
    if(!getlist){
        req.flash("error","Error in displaying list!");
        return res.redirect("/listings");
    }
    res.render("showlist",{getlist});
})
// get all route

router.get("/",async (req,res)=>{
    let totallist=await listing.find({});
    res.render("totallist",{totallist});


})

router.delete("/:id",isLoggedIn,async (req,res)=>{
    let id=req.params.id;
    await listing.findByIdAndDelete(id);
    req.flash("delete","listing deleted successfully!");
    res.redirect("/listings");
})

module.exports=router;