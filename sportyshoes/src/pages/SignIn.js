import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import Navbar from '../components/Navbar'
import { AdminProvider } from '../contexts/adminContext'

function SignIn() {
  return (
    <>
        <Header />
        <Navbar/>
        <LoginForm/>
    </>
  )
}

export default SignIn