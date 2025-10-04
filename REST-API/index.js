const express=require("express");
const app=express();
const {v4:uuidv4}=require("uuid");
let port=8080;
app.use(express.static("public"));
app.set("view engine","ejs");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true })); // middleware for http request

app.listen(port,()=>{
    console.log("app is listening on the port ", port);
});

let posts=[{username:"Srividhya",id:uuidv4(),"content":"I like coding"},{username:"Ganesan",id:uuidv4(),"content":"I like to see movies"},{username:"Gayatri",id:uuidv4(),"content":"I like my family!"}];
// get request
app.get("/posts",(req,res)=>{
    res.render("home",{posts});
});

// post request
app.get("/posts/new",(req,res)=>{
    res.render("form");

});
app.post("/posts",(req,res)=>{
    console.log(req.body);
    posts.push({username:req.body.username,"content":req.body.newpost,id:uuidv4()});
    res.redirect("/posts"); 
});

// show route using /post/:id
app.get("/posts/:id",(req,res)=>{
    let id=req.params.id;
    console.log(id);
    let flag=false;
    for(let i=0;i<posts.length;i++){
        if(id===posts[i].id){
            res.render("id",{newpost:posts[i]});
            flag=true;
            break;
        }
    }
    if(!flag){
        res.send("couldnt get post for the id");
    }

});

// update the post
app.get("/posts/:id/edit",(req,res)=>{
    let id=req.params.id;
    for(let i=0;i<posts.length;i++){
        if(id===posts[i].id){
            console.log(posts[i]);
            res.render("edit",{newpost:posts[i]});
            break;
        }
    }
});

app.patch("/posts/:id",(req,res)=>{
    let id=req.params.id;
    for(let i=0;i<posts.length;i++){
        if(id===posts[i].id){
            posts[i].content=req.body.newpost;
            break;
        }
    }
    res.redirect("/posts");

});


app.delete("/posts/:id",(req,res)=>{
    let id=req.params.id;
    posts = posts.filter(p => p.id !== req.params.id);
    res.redirect("/posts");
})

