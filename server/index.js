import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {apiUserSignup } from './controllers/user.js';
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

//-------Api Signup ----------
app.post('/api/signup',apiUserSignup);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  connDB();
});
