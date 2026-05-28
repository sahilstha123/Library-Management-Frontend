import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardPage, HomePage, SignUpPage, SignInPage, BookLandingPage, UserPage } from '../pages'
import { DefaultLayout, UserLayout } from '../components/Layouts'
import { Navigate } from 'react-router-dom'


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
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="books" element={<BookLandingPage />} />
        <Route path="user-lists" element={<UserPage />} />
        <Route path="borrow" element={<div>Borrow History (Coming Soon)</div>} />
        <Route path="profile" element={<div>Profile (Coming Soon)</div>} />
      </Route>
    </Routes>
  )
}


export default AppRoutes