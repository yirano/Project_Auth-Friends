import React from 'react'

export default function Signin() {
  return (
    <div className="signInContainer">
      <div className="recentLogins">
        <h1>Recent Logins</h1>
        <p>Click your picture or add an account</p>
      </div>
      <div className="signUp">
        <h1>Create a New Account</h1>
        <p>It's quick and easy.</p>
        <form>
          <div className="formName">
            <input type="text" name="name" placeholder="First name" />
            <input type="text" name="name" placeholder="Last name" />
          </div>
          <input type="email" name="email" placeholder="Email or Username" />
          <input type="password" name="password" placeholder="New password" />
        </form>
      </div>
    </div>
  )
}
