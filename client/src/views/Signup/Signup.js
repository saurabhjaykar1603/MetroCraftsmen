
import React, { useState ,useEffect} from "react";
import axios from 'axios'
import "./Signup.css";
import Navbar from "./../../components/Navbar/Navbar.js";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('male');


  const signupButton = async () => {

    if (!name) {
      return alert('Name is required')
    }
    if (!email) {
      return alert('Email is required')
    }
    if (!password) {
      return alert('Password is required')
    }
    if (!address) {
      return alert('Address is required')
    }
    if (!gender) {
      return alert('Gender is required')
    }
    const response = await axios.post('/api/signup', {
      name,
      email,
      password,
      address,
      gender,
    })

    if (response?.data?.success) {
      alert(response?.data?.message);
      window.location.href = '/login';
    }

  }

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storageUser?.email) {
      alert("You are already logged in!");
      window.location.href = "/";
    }
  }, [])
  
  return (
    <>
      <Navbar />
      <div className="signup-container">
        <h1 className="text-center-signup">Signup</h1>
        <h3 className="text-center-signup heading">Create a free account with your email .</h3>
        <div className="input-container-signup">
          <input type="text" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} className="font input-signup" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="font input-signup" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="font input-signup" />
          <input type="text" placeholder="Address" value={address} onChange={(e) => { setAddress(e.target.value) }} className="font input-signup" />

        </div>
        <div className="radio-container">
          <p className="font " ><span className="radio-button">male</span>
            <input type="radio" name="gender" onChange={(e) => { setGender(e.target.value) }} value='male' checked='male' />    </p>
          <p className="font"><span className="radio-button">female</span>
            <input type="radio" name="gender" onChange={(e) => { setGender(e.target.value) }} value='female' /></p>
        </div>

        <button type="button" className="button-signup" onClick={signupButton}>Signup</button>
        <Link to="/login" className="description-con">Already have an account ? </Link>
      </div>
    </>
  );
}

export default Signup;

