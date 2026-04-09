import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardPage, HomePage } from '../pages/index'


const AppRoutes = () => {
  return (
    
     <Routes>
      {/* public pages */}
      <Route path="/" element={<HomePage/>}/>

      {/* private pages */}
      <Route path="/user" element={<DashboardPage/>}/>

    </Routes>
  )
}

export default AppRoutes