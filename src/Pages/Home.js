import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import fetch from '../Authentication/fetch'

const Logout = styled.a``

const Home = () => {
  const [logged, setLogged] = useState(true)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const result = await fetch('http://localhost:5000/test')
    const body = await result.json()
    console.log(body)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setLogged(false)
  }

  return (
    <>
      <h1>Home Page</h1>
      {logged ? (
        <Logout onClick={logout}>Logout?</Logout>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  )
}
export default Home
