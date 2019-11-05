import React from 'react'
import './App.css'
import { Router, Route } from 'react-router-dom'
import history from './history'
import Home from './Pages/Home'
import Login from './Pages/Login'
import PrivateRoute from './Authentication/PrivateRoute'

function App() {
  return (
    <Router history={history}>
      <PrivateRoute exact path="/">
        <Home />
      </PrivateRoute>
      <Route path="/login" exact component={Login} />
    </Router>
  )
}

export default App
