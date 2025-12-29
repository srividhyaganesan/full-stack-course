const mongoose=require("mongoose");
async function mong_connect(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

mong_connect()
.then((msg)=>{
    console.log("established:",msg);
})
.catch((err)=>{
    console.log(err);
})

const userschema=new mongoose.Schema({
    username:String,
    email:String,
    age:Number
});

const User=mongoose.model("User",userschema);
/*
const user1=new User({username:"srividhya",email:"srividhyaganesan24@gmail.com",age:23});
const user2=new User({username:"ganesan",email:"ganesan.s.vidhya@gmail.com",age:54});
user1.save().then((msg)=>{
    console.log("user1 saved:",msg)
}).catch((err)=>{
    console.log(err);
})
user2.save().then((msg)=>{
    console.log("user1 saved:",msg)
}).catch((err)=>{
    console.log(err);
});
User.insertMany([{username:"gayatri",email:"gayatri.vidhya05@gmail.com",age:46},
    {username:"srisudhan",email:"srisudhan27@gmail.com",age:15},
    {username:"srini",email:"srini20@gmail.com",age:18}
]).then((msg)=>{
    console.log("multiple datas saved:",msg);
}).catch((err)=>{
    console.log(err);
})
*/

// mongoose queries are not exactly promises. But still then can be used
/*
User.find({'age':{$gt:40}}).then((msg)=>{
    console.log("data found:",msg);
}).catch((err)=>{
    console.log(err);
})
*/

// update
/*
User.updateOne({username:"srisudhan"},{age:16}).then((msg)=>{
    console.log("updated:",msg);
}).catch((err)=>{
    console.log(err);
});
User.updateMany({username:"ganesan"},{age:53}).then((msg)=>{
    console.log("updated:",msg);
}).catch((err)=>{
    console.log(err);
});
*/

// find and update
/*
User.findOneAndUpdate({username:"ganesan"},{age:54}).then((msg)=>{
    console.log("found and updated:",msg);
}).catch((err)=>{
    console.log(err);
});

*/

// delete
User.deleteOne({$and:[{username:"ganesan"},{age:{$lt:54}}]}).then((msg)=>{
    console.log("deleted:",msg);
}).catch((err)=>{
    console.log(err);
});
;




