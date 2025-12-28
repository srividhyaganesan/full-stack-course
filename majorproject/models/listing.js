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
      default: "https://unsplash.com/photos/photography-of-seashore-during-sunset-RqnfXDGXObA",
      set: (v) =>
        v === ""
          ? "https://unsplash.com/photos/photography-of-seashore-during-sunset-RqnfXDGXObA"
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
