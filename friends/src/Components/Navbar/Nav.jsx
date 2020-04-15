import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Public from '../Public/Public'
import Private from '../Private/Private'
import Login from '../Public/Login'

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
            <Link to="/">facebook</Link>
          </li>
          <li>
            {/* <Link to="/protected">Members Only</Link> */}
            <Route path="/login" component={Login} />
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Public} />
        <PrivateRoute path="/protected" component={Private} />
      </Switch>
    </div>
  )
}
