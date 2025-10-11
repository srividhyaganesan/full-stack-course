const mysql2=require("mysql2");
const express=require("express");
const app=express();
let port=8080;
const path=require("path");
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true })); // middleware for http request

const connection=mysql2.createConnection({

    host:'localhost',
    user:'root',
    password:'SRIvid@24',
    database:'college'

});
/*
let q='INSERT INTO USER (id,username,email,password) VALUES ?';
let users=[["256","srini","srini@gmail.com","srini@20"],
            ["789","gayatri","gayatri.vidhya@gmail.com","gayatri555"]];

try{
    connection.query(q,[users],(err,result)=>{
        if(err){
            throw err;
        }
        console.log(result);
    })
}
catch(err){
    console.log(err);
}

connection.end();
*/

// routing with sql

app.listen(port,()=>{
    console.log("app is listening on the port",port);
});

app.get("/user",(req,res)=>{
    let q="SELECT id,username,email from user"
    try{
        connection.query(q,(err,result)=>{
            if(err){
                throw err;
            }
            res.render("users",{result});
        })
    }
    catch(err){
        console.log(err);
        res.send("some error in fetching user info");
    }
})

// update the post
app.get("/:id/edit",(req,res)=>{
    let id=req.params.id;
    let q=`SELECT * FROM USER WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err){
                throw err;
            }
            let input=result[0];
            console.log(result);
            res.render("edit",{input});
        })
        
    }
    catch (err){
        console.log(err);
    }
})

app.patch("/user/:id",(req,res)=>{
    let id=req.params.id;
    let q=`SELECT * FROM USER WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err){
                throw err;
            }
            let input=result[0];
            console.log(result);
            let updated_username=req.body.newUsername;
            let formpass=req.body.formpassword;
            if(formpass!=input.password){
                res.send("wrong password, cant update");
            }
           else{
            let updatequery=`UPDATE USER SET username='${updated_username}' WHERE id='${input.id}'`
            try{
                connection.query(updatequery,(err,result)=>{
                    if(err){
                        throw err;
                    }
                    else{
                        res.redirect("/user");
                    }
                })
            }
            catch(err){
                console.log(err);
            }
           }
        })
        
    }
    catch (err){
        console.log(err);
    }
})

app.get("/posts/new",(req,res)=>{
    res.render("create");
})

app.post("/posts",(req,res)=>{
    let id=req.body.id;
    let username=req.body.username;
    let password=req.body.password;
    let email=req.body.email;
    console.log(req.body);

    let q=`INSERT INTO USER VALUES (${id},'${username}','${email}','${password}')`;
    try{
        connection.query(q,(err,result)=>{
            if(err){
                throw err;
            }
            else{
                res.redirect("/user");
            }
        })
    }
    catch(err){
        console.log(err);
    }
})

app.delete("/user/:id",(req,res)=>{
    let id=req.params.id;
    let q=`DELETE FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err){
                throw err;
            }
            console.log(result);
            res.redirect("/user");
        })
    }
    catch(err){
        console.log(err);
    }
})

app.get("/",(req,res)=>{
    let q='SELECT count(*) from user';
    try{
        connection.query(q,(err,result)=>{
            if(err){
                throw err;
            }
            let usercount=result[0]['count(*)']
           res.render("home",{usercount});
        })
    }
    catch(err){
        console.log(err);
    }
})