import React, { ReactNode } from 'react';
import Header from './Header'
import Footer from './Footer'
import Box from "@mui/material/Box"
import { Outlet } from 'react-router-dom';


const DefaultLayout = () => {
  return (
    <div>
      <Header />

      <Box component= "main" sx={{minHeight: "80vh"}}>
       <Outlet/>
      </Box>
      <Footer />
    </div>
  )
}

export default DefaultLayout