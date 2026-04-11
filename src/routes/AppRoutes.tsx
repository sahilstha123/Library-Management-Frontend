import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardPage, HomePage } from '../pages/index'
import DefaultLayout from '../components/Layouts/DefaultLayout'


const AppRoutes = () => {
  return (

    <Routes>
      {/* public pages */}

      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      {/* private pages */}
      <Route path="/user" element={<DashboardPage />} />

    </Routes>
  )
}

export default AppRoutes