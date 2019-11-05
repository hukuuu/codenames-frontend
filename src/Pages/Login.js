import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Redirect, useLocation } from 'react-router-dom'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  background: white;
  padding: 0.5rem 1rem;
  font-size: 3.2rem;
`

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Login = () => {
  const onClick = () => {
    window.location.href = 'http://localhost:5000/login/facebook'
  }

  const token = useQuery().get('token')
  useEffect(() => {
    if (token) {
      console.log(`got token: ${token}`)
      localStorage.setItem('token', token)
    }
  })

  return token ? (
    <Redirect to="/" />
  ) : (
    <Container>
      <Button onClick={onClick}>Login </Button>
    </Container>
  )
}
export default Login
