const express=require("express");
const app=express();
const path = require('path');
const mongoose=require("mongoose");
const Chat=require("./models/chat");
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, "public")))
app.set('views', path.join(__dirname, 'views'))
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true })); // middleware for http request


app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});
async function mong_connect(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

mong_connect()
.then((msg)=>{
    console.log("established:",msg);
})
.catch((err)=>{
    console.log(err);
})

// index route
app.get("/chats",async (req,res)=>{
    let allchats=await Chat.find();
    console.log(allchats);
    res.render("showallchats",{allchats});

})

app.get("/chats/new",(req,res)=>{
    res.render("newchat");
})

app.post("/chats",(req,res)=>{
    let formreq=req.body;
    console.log(formreq);
    let from=formreq.from;
    let to=formreq.to;
    let msg=formreq.message;

    let newchat=new Chat({
        from:from,
        to:to,
        message:msg,
        createdAt:new Date()
    })
    newchat.save().then((res)=>{
        console.log("newchat added");
    }).catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats");
})

app.get("/chats/:id/edit",async (req,res)=>{
    let id=req.params.id;
    console.log(id);
    let input=await Chat.findById(id);
    console.log("input is",input);
    res.render("editchat",{input});

})

app.patch("/chats/:id",(req,res)=>{
    let id=req.params.id;
    let message=req.body.message;
    console.log("updated message",message);
    Chat.findByIdAndUpdate(id,{message:message}).then((result)=>{
        console.log("message updated");
    }).catch((err)=>{
        console.log(err);
    })
   res.redirect("/chats"); 
})

app.delete("/chats/:id",(req,res)=>{
    let id=req.params.id;
    Chat.findByIdAndDelete(id).then((result)=>{
        console.log("message deleted");
    }).catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats");
})



