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
    <div>
      <h1>signup</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} className="font" />
      <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="font" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="font" />
      <input type="text" placeholder="Address" value={address} onChange={(e) => { setAddress(e.target.value) }} className="font" />
      <div>
        <p className="font">male</p>
        <input type="radio" name="gender" onChange={(e) => { setGender(e.target.value) }} value='male' checked='male' />
        <p className="font">female</p>
        <input type="radio" name="gender" onChange={(e) => { setGender(e.target.value) }} value='female' />
      </div>

      <button type="button" onClick={signupButton}>Signup</button>
    </div>
  );
}

export default Signup;
