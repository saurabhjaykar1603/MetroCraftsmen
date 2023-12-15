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

const getServicesByName = async (req, res) => {
  const { serviceName } = req.params;
  try {
    const findServiceByName = await ServiceName.find({
      serviceName: serviceName,
    });
    res.status(200).json({
      success: true,
      data: findServiceByName,
      message: "Service successfully fetched by ServiceName", // Correcting "fetach" to "fetch"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export { postServices, getServicesByName };
