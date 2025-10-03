import mongoose from "mongoose";

const serviceSchema =new mongoose.Schema({
    name:{type:String,required:true},
    description: {type:String, required:true},
    price: {type:Number,required:true},
    image:{type:String, required:true},
    category:{type:String, required:true}
})

const serviceModel = mongoose.models.service || mongoose.model("service",serviceSchema);

export default serviceModel;