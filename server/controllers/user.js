import User from "../models/User.js";

const apiUserSignup = async (req, res) => {
    const { name, email, password, gender, address } = req.body;
  
    const user = await User({
      name,
      email,
      password,
      gender,
      address
    })
  
    try {
      const saved = await user.save();
      return res.json({
        success: true,
        data: saved,
        message: 'Signup SuccessFully'
      })
    }
    catch (e) {
      return res.json({
        success: false,
        message: e.message
      })
    }
  }

  const apiUserLogin = async (req ,res)=>{
    const {email, password} = req.body;
  
    const savedata = await User.findOne({email,password});
    try{
      const saved = await savedata.save();
      return res.json({
        success:true,
        data:saved,
        message:'Login Successfully'
      })
    }
    catch(e){
      return res.json({
        success:false,
        message:e.message
      })
    }
  }

  export {apiUserSignup , apiUserLogin}