import {Schema, model} from "mongoose";

const elecricianSchema = new Schema ({
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
});

const Electrician = model('Electrician',elecricianSchema);

export default Electrician;