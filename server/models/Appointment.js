import {Schema, model} from "mongoose";

const appointmentSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    userLocation:{
        type: String,
        required:true,
    },
    serviceProvider:{
        type:String,
        enum:['el', 'plb','crp'],
        required:true
    },
    serviceProviderContact:{
        type:String,
        enum:['+91 8765456787' ,'+91 4456778655' ,'+91 4567895467'],
        required :true
    },
    appointmentDate:{
        type:String,
        required:true
    }

},
{
    timestamps: true,
  }
)

const Appointment = model('Appointment',appointmentSchema);
export default Appointment;