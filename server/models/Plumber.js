import {Schema ,model} from "mongoose";

const plumberSchema = new Schema({
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
const Plumber = model('Plumber',plumberSchema);

export default Plumber;


