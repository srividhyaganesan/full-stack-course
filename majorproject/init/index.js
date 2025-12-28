const mongoose=require("mongoose");
const entiredata=require("./data");
const listing=require("../models/listing");

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

main().then((req)=>{
    console.log("connected to mongoose")
}).catch((err)=>{
    console.log(err);
})

async function insertdata(){
    await listing.deleteMany({});
    entiredata.data=entiredata.data.map((inddata)=>({...inddata,owner:"6950b49cd1866700e92a3e26"}))
    await listing.insertMany(entiredata.data);
}

insertdata().then((res)=>{
    console.log("data was successfully stored:",res);

}).catch((err)=>{
    console.log(err);
})

