import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import {postAppoinments} from "./controllers/Appointment.js";
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

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  connDB();
});
