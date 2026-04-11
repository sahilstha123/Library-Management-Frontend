import React, { ReactNode } from 'react';
import Header from './Header'
import Footer from './Footer'
import Box from "@mui/material/Box"
interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <Header />

      <Box component= "main" sx={{minHeight: "80vh"}}>
        {children}
      </Box>
      <Footer />
    </div>
  )
}

export default DefaultLayout