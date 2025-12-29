let allchats=[{from:"sri",to:"gan",message:"hi daddy",createdAt:new Date()},
    {from:"gan",to:"sri",message:"hi vidhu",createdAt:new Date()},
    {from:"gay",to:"gan",message:"buy veggies",createdAt:new Date()},
    {from:"gay",to:"sudhan",message:"play cricket well",createdAt:new Date()},
    {from:"srini",to:"gan",message:"teach me maths",createdAt:new Date()},
    {from:"kittu",to:"sri",message:"dont distract!focus!",createdAt:new Date()},
    {from:"sri",to:"kittu",message:"take medicines properly",createdAt:new Date()}
];

const mongoose=require("mongoose");
const Chat=require("./models/chat");
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
Chat.insertMany(allchats).then((msg)=>{
    console.log("chats saved:",msg)
}).catch((err)=>{
    console.log(err);
});

