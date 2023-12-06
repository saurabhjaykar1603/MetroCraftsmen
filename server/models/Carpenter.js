import { Schema, model } from "mongoose";
const carpenterSchema = new Schema({
    name:{
        type :String,
        required:true
    },
    contact:{
        type:String,
        required:true,    
    },
    description:{
        type:String,
        required:true,     
    },
    img:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})

const Carpenter = model('Carpenter',carpenterSchema);

export default Carpenter;