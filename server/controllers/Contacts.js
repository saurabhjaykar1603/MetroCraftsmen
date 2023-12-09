
import Contact from "./../models/Contacts.js";

const postApiContacts = async (req, res) => {

  const { name, email, mobile, message } = req.body;

  const response = await Contact({
    name,
    email,
    mobile,
    message,
  });
  
  const saved = await response.save();
  try {
    return res.json({
      success: true,
      data: saved,
      message: 'Contact saved Successfully'
    })
  }
  catch (e) {
    return res.json({
      success: false,
      message: e.message
    })
  }
};

const getApiContacts =  async (req,res)=>{

  const {_id} = req.params;

  const contactId = await Contact.find({id:_id})
  try{
    return res.json({
      success:true,
      data:contactId,
      message:'All Fetched Contact'
    })
  }
  catch(e){
    return res.json({
      success:false,
      message:e.message
    })
  }
}

export { postApiContacts , getApiContacts }