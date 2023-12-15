import ServiceName from "../models/ServiceName.js";

const postServices = async (req, res) => {
  const { serviceName, contact, speciality, img, price, name } = req.body;
  const Service = new ServiceName({
    serviceName,
    name,
    contact,
    speciality,
    img,
    price,
  });
  try {
    const savedService = await Service.save();
    res.status(201).json({
      success: true,
      data: savedService,
      message: "Create Plumber Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};



export { postServices, };
