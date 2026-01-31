if(process.env.NODE_ENV!="production")
{
    require("dotenv").config();
}

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const listing=require("./models/listing");
const wrapasync=require("./utils/wrapasync");
const Expresserror=require("./utils/Expresserror");
const methodOverride = require("method-override");
const { listingschema, reviewschema } = require("./schema");
app.use(methodOverride("_method"));
const Review=require("./models/reviews");
const listingRouter=require("./routes/listings");
const reviewRouter=require("./routes/reviews");
const userRouter=require("./routes/user");
const cookieparser=require("cookie-parser");
app.set("view engine","ejs");
const path=require("path");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
engine=require("ejs-mate");
app.engine("ejs",engine);
const session=require("express-session");
const MongoStore=require("connect-mongo").default;
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/users");


async function main() {
  //await mongoose.connect('mongodb://127.0.0.1:27017/test');
  await mongoose.connect(process.env.ATLAS_DB_URL);
}

main().then((req)=>{
    console.log("connected to mongoose")
}).catch((err)=>{
    console.log(err);
})

const store=MongoStore.create({
        mongoUrl: process.env.ATLAS_DB_URL,
        crypto:{
            secret:process.env.SECRET
        },
        touchAfter:24*60*60
})

store.on("error",(err)=>{
    console.log("error in mongo session store",err);
})


const sessionoptions={
    store:store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+1000*60*60*24*7,
        maxAge:1000*60*60*24*7,
        httpOnly:true
    }
}


app.get("/" ,(req,res)=>{
    res.send("Welcome to Wanderlust!");
})

app.use(session(sessionoptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.deleted=req.flash("delete");
    res.locals.updated=req.flash("update");
    res.locals.errored=req.flash("error");
    res.locals.curruser=req.user;
    next();
});

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);
/*
app.get("/demouser",async (req,res)=>{

    let fakeUser=new User({
        email:"srividhyaganesan24@gmail.com",
        username:"Srividhya"
    })

    const registeruser=await User.register(fakeUser,"SRIVIDHYA24");
    res.send(registeruser);

})
   */

app.all(/.*/,(req,res,next)=>{
    next(new Expresserror(404,"Page not found"));
})

app.use((err,req,res,next)=>{
    let status=err.status || 500;
    console.log(status);
    let msg=err.message || "something is wrong";
    console.log(msg);
    req.flash("error", msg);
    res.redirect("/listings")
    // res.status(status).send(msg);
})

app.listen(8080,()=>{
    console.log("app is listening on the port 8080")
});

