import Appointment from "../models/Appointment";

const postAppoinments = async (req,res) => {
    const { user, userLocation,serviceProvider,serviceProviderContact, appointmentDate} =req.body;

    const appointment = new Appointment({
        user,
        userLocation,
        serviceProvider,
        serviceProviderContact, 
        appointmentDate
    });
    try{
        const saveAppoinment = await appointment();
        res.json({
            success:true,
            data:saveAppoinment,
            message:"Ctrate appintment successfully"
        });
    }
    catch(err){
       res.json({
        success:false,
        message:err.message
       });
    }

}
export {postAppoinments};