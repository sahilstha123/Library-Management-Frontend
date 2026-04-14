import React from 'react'
import { Container, Grid, Box, Typography, useTheme, Divider, alpha } from "@mui/material";
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom';
import { navy } from '../../theme/theme';
import SideBar from './SideBar';


const UserLayout = () => {
    const theme = useTheme()
    const isLight = theme.palette.mode === "light"
    return (
        <Box>
            <Box sx={{ minHeight: "100vh", display: 'flex', flexDirection: 'column' }}>
                <Header />
                <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden', }}>
                    {/* left sidebar */}
                    <Box
                        sx={{
                            width: { xs: "200px", md: "280px" },
                            bgcolor: isLight ? "#ffffff" : navy,
                            color: isLight ? navy : "#f8fafc",
                            borderRight: `1px solid ${theme.palette.divider}`
                        }}
                    >
                        <SideBar />

                    </Box>

                   
                    {/* Right side */}
                    <Box
                        component="main"
                        sx={{
                            flex: 1,
                            bgcolor: isLight ? "#ffffff" : navy,
                            p: 3,
                            overflow: "auto",
                            color: isLight ? navy : "#f8fafc",


                        }}
                    >
                        <Outlet />
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default UserLayout