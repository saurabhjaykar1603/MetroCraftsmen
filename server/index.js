import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


import {postAppoinments,getAppointmentById,deletAppointmentById} from "./controllers/Appointment.js";
import {postCarpenter,getCarpenter} from "./controllers/Carpenter.js";
import {postElectrician,getElectrician} from "./controllers/Electrician.js";
import {postPlumber,getPlumber} from "./controllers/Plumber.js";
import {apiUserSignup , apiUserLogin} from './controllers/user.js';
import {postApiContacts, getApiContacts} from './controllers/Contacts.js'
import {postServices} from "./controllers/servicename.js"
import path from "path";
const __dirname = path.resolve();

// import {
//   postAppoinments,
//   getAppointmentById,
//   deletAppointmentById,
// } from "./controllers/Appointment.js";
// import { postCarpenter, getCarpenter } from "./controllers/Carpenter.js";
// import { postElectrician, getElectrician } from "./controllers/Electrician.js";
// import { postPlumber, getPlumber } from "./controllers/Plumber.js";
// import { apiUserSignup, apiUserLogin } from "./controllers/user.js";

dotenv.config();

const app = express();
app.use(express.json());

const connDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI);
  if (conn) {
    console.log(" Mongodb connected successfully ");
  }
};

// api controllers goes bellow
// health api
app.get("/api/v1/healts", async (req, res) => {
  res.json({
    success: true,
    message: "Status okk",
  });
});

// POST Appointment
app.post("/api/v1/appointments", postAppoinments);

// GET AppointmentByID API

app.get("/api/v1/appointments/:id", getAppointmentById);

// DELETE AppointmentById API

app.delete("/api/v1/appoinments/:id", deletAppointmentById);

// POST carpenter API
app.post("/api/v1/carpenters", postCarpenter);

// GET carpenter API
app.get("/api/v1/carpenters", getCarpenter);

// POST electrician API

app.post("/api/v1/electricians", postElectrician);

// GET  electrician API

app.get("/api/v1/electricians", getElectrician);

// POST plumber API

app.post("/api/v1/plumbers", postPlumber);

// GET plumber API
app.get("/api/v1/plumbers", getPlumber);


//-------API Signup ----------
app.post('/api/signup',apiUserSignup);

//---------API Login ---------
app.post('/api/login', apiUserLogin);

//--------API Contacts ---------
app.post('/api/contacts', postApiContacts);

//-------Get API id in Contacts -------
app.get('/api/contacts/:id' , getApiContacts);

// const PORT = process.env.PORT || 5000;

//-------Api Signup ----------
app.post("/api/signup", apiUserSignup);

//---------Api Login ---------
app.post("/api/login", apiUserLogin);

//---------ServiceName () -------
app.post("/api/v1/services/", postServices ) 





const PORT = process.env.PORT || 8000;
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  connDB();
});
