import React from 'react'
import './App.css'
import { Switch, Router, Route, Redirect } from 'react-router-dom'
import history from './history'
import Lobby from './Pages/Lobby'
import Login from './Pages/Login'
import Settings from './Pages/Settings'
import PrivateRoute from './Authentication/PrivateRoute'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute exact path="/">
          <Lobby />
        </PrivateRoute>
        <PrivateRoute exact path="/settings">
          <Settings />
        </PrivateRoute>
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
