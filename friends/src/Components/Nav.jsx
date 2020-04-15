import React from 'react'
import { Route, Link, Router, Redirect } from 'react-router-dom'
import Public from './Public'
import Protected from './Private'
import Login from './Login'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route
    {...rest}
    render={props => {
      return localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
          <Redirect to="/login" />
        )
    }}
  />
}

export const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/protected">Protected page</Link>
          </li>
        </ul>
      </nav>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} render={() => <Protected />} />
    </div>
  )
}
