import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Login.css"
import Navbar from "./../../components/Navbar/Navbar.js"
import { Link } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const loginButton = async () => {
    // if (!email) {
    //   return alert('Email is required')
    // }
    // if (!password) {
    //   return alert('Password is required')
    // }

    const response = await axios.post('/api/login', {
      email,
      password
    });

    alert(response?.data?.message);

    if (response?.data?.success) {
      localStorage.setItem("user", JSON.stringify(response?.data?.data));
      window.location.href = '/';
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
      <div className='login-container'>
        <h1 className='text-center-login'>Login</h1>

        <div className='input-container-login'>
          <input className='input-login font' type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
          <input className='input-login font' type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
          <button className='button-login' type='button' onClick={loginButton}>Login</button>
          <Link to="/signup" className="description-con-login">Create a new account ?</Link>
        </div>

      </div>
    </>
  )
}

export default Login
