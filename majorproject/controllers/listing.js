const listing=require("../models/listing");
const mongoose=require("mongoose");
const {listingschema}=require("../schema.js");
module.exports.getalllist=async (req,res)=>{
    let totallist=await listing.find({});
    res.render("totallist",{totallist});


}

module.exports.newlist=(req,res)=>{
    // by default authentication is false
    res.render("createlist");
}

module.exports.showlist=async (req,res)=>{
    let id=req.params.id;
    console.log("id is",id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        req.flash("error", "Invalid listing ID!,Error in displaying list!");
        return res.redirect("/listings");
    }

    let getlist=await listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    console.log(getlist);
    if(!getlist){
        req.flash("error","Error in displaying list!");
        return res.redirect("/listings");
    }
    res.render("showlist",{getlist});
}

module.exports.editlist=async (req,res)=>{
    let id=req.params.id;
    let editpost=await listing.findById(id);
    if(!(editpost.owner._id.equals(req.user._id))){
        req.flash("error","You dont have permission to edit the list");
        return res.redirect(`/listings/${id}`);
    }
    res.render("editpost",{editpost});
}

module.exports.patchlist=async (req,res)=>{
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
}

module.exports.postlist=async (req,res,next)=>{
        console.log("req received after post is",req.body);
        const { error } = listingschema.validate(req.body);  
        if (error) {
        throw new Expresserror(400, error.details[0].message); 
        }

        let title=req.body.listing.title;
        let desc=req.body.listing.desc;
        let location=req.body.listing.location;
        let price=req.body.listing.price;
        //let url=req.body.listing.image.url;
        //let filename=req.body.listing.image.filename;
        let url=req.file.path;
        let filename=req.file.filename;

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
    }

module.exports.deletelist=async (req,res)=>{
    let id=req.params.id;
    let deletepost=await listing.findById(id);
    if(!(deletepost.owner._id.equals(req.user._id))){
        req.flash("error","You dont have permission to delete the list");
        return res.redirect(`/listings/${id}`);
    }
    await listing.findByIdAndDelete(id);
    req.flash("delete","listing deleted successfully!");
    res.redirect("/listings");
}