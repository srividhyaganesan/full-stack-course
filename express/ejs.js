const express=require("express");
let app=express();
let port=8080;
const path=require("path");
app.use(express.static("public")); // for current dir
// when diff dir is used
//app.use(express.static(path.join(__dirname,"public"))); 
app.listen(port,()=>{
    console.log(`app is listening on the port ${port}`);
});
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
/*
app.get("/",(req,res)=>{
    res.render("home.ejs");
});
*/
app.get("/ig/:username",(req,res)=>{
    let username=req.params.username;
    const instadata=require("./data.json");
    if(instadata[username]){
        res.render("insta",{"username":instadata[username]});
    }
    else{
        res.send(`couldnt fetch data for ${username}`);
    }
    
})

app.get("/",(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("home.ejs",{num:diceval}); // object is passed as an argument
});

