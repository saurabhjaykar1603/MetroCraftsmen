import Plumber from "../models/Plumber.js";

const postPlumber = async (req,res) => { 
    const{ name, contact, description, price, img } = req.body;

    const plumber = new Plumber({
        name,
         contact,
          description,
           price,
            img
    });
    try{
        const savePlumber =await plumber.save();
        res.json({
            success: true,
            data:savePlumber,
            message:"Create Plumber Successfully"
        });
    }
    catch(err){
        res.json({
           success:false,
           message:err.message 
        });
    }
}

export {postPlumber};