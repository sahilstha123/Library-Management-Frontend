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
        <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
            {/* sidebar container */}
            <Box
                component="nav"
                sx={{
                    width: { xs: "240px", md: "280px" },
                    flexShrink: 0,
                    bgcolor: "background.paper",
                    borderRight: `1px solid ${theme.palette.divider}`,
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <Box sx={{ p: 3, textAlign: "center" }}>
                    <Typography variant='subtitle2' sx={{ color: "text.secondary", fontWeight: 600 }}>
                        Welcome Back
                    </Typography>
                    <Typography variant='h6' sx={{ color: "text.primary", fontWeight: 800 }}>
                        Sahil Shrestha
                    </Typography>
                    <Divider sx={{ mt: 2, opacity: 0.6 }} />
                </Box>
                <SideBar />
            </Box>

            {/* Main content Area */}
            <Box
            sx={{
                flexGrow:1,
                display: "flex",
                flexDirection:'column',
                minWidth:0
            }}
            >
                <Header/>
                <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: {xs:2, md:4},
                    bgcolor: 'background.default',
                    color: "text.primary",
                    overflow: "auto"

                }}
                >
                    <Outlet/>
                </Box>
                <Footer/>
            </Box>
        </Box>
    )
}

export default UserLayout