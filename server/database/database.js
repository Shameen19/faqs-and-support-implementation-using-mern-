import mongoose from 'mongoose';

//2 libraries mongoose and monogodb 
//mongoose has some extra functionality

const Connection=async()=>{
    await mongoose.connect("mongodb://localhost:27017/myfirstcomplaint",function(err,db){
    if(err) throw err;
    console.log("Db connected");
})

}

export default Connection;