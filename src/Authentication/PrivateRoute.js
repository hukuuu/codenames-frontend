import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLoggedIn } from './auth'

const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      isLoggedIn() ? children : <Redirect to="/login" />
    }
  />
)

export default PrivateRoute
