const mongoose=require("mongoose");
const schema=mongoose.Schema;
const Review=require("./reviews");
const listingschema=new schema({
    title:{
        type:String,
        required:true
    },
    price:Number,
    desc:String,
    image: {
    filename: {
      type: String,
      default: "listingimage"
    },
    url: {
      type: String,
      default: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      set: (v) =>
        v === ""
          ? "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          : v
    }
  },
    location:String,
    reviews:[
      {
        type:schema.Types.ObjectId,
        ref:"review"
      }
    ],
    owner:{
      type:schema.Types.ObjectId,
      ref:"User"

    }
});
listingschema.post("findOneAndDelete" ,async (listings)=>{
  if (listings){
    await Review.deleteMany({_id:{$in:listings.reviews}});
  }
});

const listingmodel=mongoose.model("listing",listingschema);

module.exports=listingmodel;
