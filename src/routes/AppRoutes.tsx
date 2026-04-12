import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardPage, HomePage, SignUpPage, SignInPage } from '../pages'
import { DefaultLayout, UserLayout } from '../components/Layouts'


const AppRoutes = () => {
  return (

    <Routes>
      {/* public pages */}

      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signin" element={<SignInPage />} />
      </Route>
      {/* private pages */}
      <Route path="/user" element={<UserLayout />}>
        <Route path="dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes