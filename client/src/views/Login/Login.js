import React, { useState } from 'react'
import axios from 'axios';
import "./Login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginButton = async () => {
    if (!email) {
      return alert('Email is required')
    }
    if (!password) {
      return alert('Password is required')
    }

    const response = await axios.post('/api/login', {
      email,
      password
    });

    if (response?.data?.success) {
      localStorage.setItem("user", JSON.stringify(response?.data?.data));
      alert(response?.data?.message);
      window.location.href = '/addappointment'
    }
  }
  return (
    <div className='login-container'>
      <h1 className='text-center-login'>Login</h1>

      <div className='input-container-login'>
        <input className='input-login font' type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
        <input className='input-login font' type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
        <button className='button-login' type='button' onClick={loginButton}>Login</button>
        <p className="description-con-login">Have an account ? <span className="login-log-con">Log in</span></p>
      </div>

    </div>
  )
}

export default Login
