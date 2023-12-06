import React, { useState } from "react";
import axios from 'axios'
import "./Signup.css";

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


  return (
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
      <p className="description-con">Have an account ? <span className="signup-log-con">Log in</span></p>
    </div>
  );
}

export default Signup;
