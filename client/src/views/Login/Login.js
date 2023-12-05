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
      alert(response?.data?.message);
      window.location.href = '/'
    }
  }
  return (
    <div>
      <h1>Login</h1>

      <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
      <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
      <button type='button' onClick={loginButton}>Login</button>

    </div>
  )
}

export default Login
