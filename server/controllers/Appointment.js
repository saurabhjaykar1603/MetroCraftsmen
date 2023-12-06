import Appointment from "../models/Appointment.js";

const postAppoinments = async (req, res) => {
    const { user, userLocation, serviceProvider, serviceProviderContact, appointmentDate } = req.body;

    const appointment = new Appointment({
        user,
        userLocation,
        serviceProvider,
        serviceProviderContact,
        appointmentDate
    });
    try {
        const saveAppoinment = await appointment.save();
        res.json({
            success: true,
            data: saveAppoinment,
            message: "Ctrate appintment successfully"
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: err.message
        });
    }
}
const getAppointmentById = async (req, res) => {
    const { id } = req.params; // Correcting "parms" to "params"
    
    try {
        const findUserAppointments = await Appointment.find({ user: id }).populate("user"); // Correcting "papulate" to "populate"

        findUserAppointments.forEach((appointment) => {
            appointment.user.password = undefined;
        });

        res.json({
            success: true,
            data: findUserAppointments, // Correcting "findeUserAppointment" to "findUserAppointments"
            message: "Appointments successfully fetched by user" // Correcting "fetach" to "fetch"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching appointments",
            error: error.message,
        });
    }
}; 

const  deletAppointmentById = async (req, res) => {
    const {id} =req.params;
    try{
        const deletAppointment = await Appointment.deleteOne({_id:id});
        res.json({
            success:true,
            data:deletAppointment,
            message:"Delet appointment successfully"
        });
    }
    catch(err){
        res.json({
            success:false,
        message:err.message
        });
    }
}

export { postAppoinments, getAppointmentById,deletAppointmentById };