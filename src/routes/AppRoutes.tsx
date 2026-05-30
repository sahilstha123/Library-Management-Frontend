import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  DashboardPage,
  HomePage,
  SignUpPage,
  SignInPage,
  Books,
  BookLandingPage,
  EditBookPage,
  NewBookPage,
  ReviewsPage,
  UserPage,
  Profile,
  ForgetPassword,
  BorrowPage
} from '../pages'
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
        <Route path="forget-password" element={<ForgetPassword />} />
      </Route>
      {/* private pages */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="books" element={<Books />} />
        <Route path="new-book" element = {<NewBookPage/>}/>
        <Route path = "edit-book" element = {<EditBookPage/>}/>
        <Route path = "borrow-history" element = {<BorrowPage/>}/>
        <Route path="book-landing" element={<BookLandingPage />} />
        <Route path="reviews" element = {<ReviewsPage/>}/>
        <Route path="all" element={<UserPage />} />
        <Route path="profile" element = {<Profile/>}/>
      </Route>
    </Routes>
  )
}


export default AppRoutes