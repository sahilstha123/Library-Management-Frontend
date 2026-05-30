import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface AuthProps{
    children: ReactNode
}

const AuthRoute = ({children}:AuthProps) => {

    const isAuth = true
  return (
    isAuth ? children : <Navigate to= "/login"/>
  )
}

export default AuthRoute