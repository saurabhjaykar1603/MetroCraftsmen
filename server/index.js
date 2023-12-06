import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import {postAppoinments} from "./controllers/Appointment.js";
import {postCarpenter,getCarpenter} from "./controllers/Carpenter.js";
import {postElectrician} from "./controllers/Electrician.js";
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
app.get('/api/v1/healts', async (req,res)=> {
  res.json({
    success:true,
    message:"Status okk"
  });
});

// POST Appointment 
app.post('/api/v1/appointments', postAppoinments);

// POST carpenter API
app.post('/api/v1/carpenters',postCarpenter);

// GET carpenter API
app.get('/api/v1/carpenters',getCarpenter);

// POST electrician API

app.post('/api/v1/electricians',postElectrician);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  connDB();
});
