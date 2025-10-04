console.log("hello world");
// express js
function response(port){
    console.log(`app is listening on the port ${port}`);
}
const express=require("express");
//console.log(express);
const app=express();
//console.dir(app);
let port=8080;
app.listen(port,response(port));
/*
app.use((req,res)=>{
    //console.log("request is",req);
    console.log("new incoming request");
    // string response
    //res.send("sending response for request");
    // object response
    res.send({
        name:"Srividhya",
        hobby:"coding",
        work:"tester"
    });
    
   // html response
   
    html_text="<h1>Welcome to express js </h1> <ul><li>handling requests</li> <li> sending response </li> <ul>  ";
    res.send(html_text);
});
*/
// routing 
/*
html_text="<h1>Welcome to express js </h1> <ul><li>handling requests</li> <li> sending response </li> <ul>  ";
app.get("/",(req,res)=>{
    res.send(html_text);

})
app.get("/apple",(req,res)=>{
    res.send({
        name:"apple",
        color:"red"
        });
});

help_text="<button>click me for help</button>"
app.get("/help",(req,res)=>{
    res.send(help_text);
});
*/

// path parameters
app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    res.send(`Welcome to the page of ${username} and id is ${id}`);
});
app.get("/:username",(req,res)=>{
    let username=req.params.username;
    console.log(req.params);
    res.send(`welcome to the page of ${username}`);
});


