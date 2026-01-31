const express=require("express");
const router=express.Router();
const wrapasync=require("../utils/wrapasync.js");
const Expresserror=require("../utils/Expresserror.js");
const methodOverride = require("method-override");
const flash=require("connect-flash");
const {isLoggedIn}=require("../middleware.js");
const listingcontroller=require("../controllers/listing.js");
const multer  = require('multer')
const {storage}=require("../cloudinary.js")
const upload = multer({ storage })

router.route("/") 
.get(listingcontroller.getalllist)
.post(isLoggedIn,upload.single('listing[image][url]'),wrapasync(listingcontroller.postlist))
/*.post(,(req,res)=>{
    res.send(req.file);
})*/

// new listing page
router.get("/new",isLoggedIn,listingcontroller.newlist)

router.route("/:id")
.get(listingcontroller.showlist)
.patch(isLoggedIn,listingcontroller.patchlist)
.delete(isLoggedIn,listingcontroller.deletelist)


// edit listing page

router.get("/:id/edit",isLoggedIn,listingcontroller.editlist)





module.exports=router;