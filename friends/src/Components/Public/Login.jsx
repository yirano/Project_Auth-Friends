import React, { useState } from 'react'
import axiosWithAuth from '../../axios/axiosWithAuth'

export default function Login(props) {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const login = e => {
    e.preventDefault()
    console.log('submitted');
    axiosWithAuth().post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload)
        props.history.push('/protected')
      })
  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value);
  }

  return (
    <form onSubmit={e => login(e)}>
      <div className="inputContainer">
        <label for="password">Username</label>
        <input
          type="name"
          name="username"
          value={credentials.username}
          placeholder="Username"
          onChange={e => handleChange(e)}
        />
      </div>
      <div className="inputContainer">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          placeholder="Password"
          onChange={e => handleChange(e)}
        />
      </div>
      <div className="inputContainer button">
        <input type="submit" value="Log In" />
      </div>
    </form>
  )
}
