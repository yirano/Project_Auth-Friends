import React, { useState } from 'react'
import axiosWithAuth from '../../axios/axiosWithAuth'

export default function Signin() {
  const [newUser, setNewUser] = useState({ name: '', user: '', password: '' })

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('submitted');
    axiosWithAuth().post('http://localhost:5000/api/signup', newUser)
  }

  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="signInContainer">
      <div className="recentLogins">
        <h1>Recent Logins</h1>
        <p>Click your picture or add an account</p>
      </div>
      <div className="signUp">
        <h1>Create a New Account</h1>
        <p>It's quick and easy.</p>
        <form onSubmit={(e) => handleSignup(e)}>
          <div className="formName">
            <input type="text" name="name" placeholder="First name" onChange={e => handleChange(e)} />
            <input type="text" name="name" placeholder="Last name" onChange={e => handleChange(e)} />
          </div>
          <input type="email" name="email" placeholder="Email or Username" onChange={e => handleChange(e)} />
          <input type="password" name="password" placeholder="New password" onChange={e => handleChange(e)} />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  )
}
