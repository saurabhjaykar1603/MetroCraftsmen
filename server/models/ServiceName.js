import { Schema, model } from "mongoose";
const ServiceNameSchema = new Schema({
  serviceName: {
    type: "string",
    enum: ["electrician", "carpenter", "plumber"],
    required: true,
  },
  name: {
    type: "string",
    required: true,

  },
  contact: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
});
const ServiceName = model("ServiceName", ServiceNameSchema);

export default ServiceName;
