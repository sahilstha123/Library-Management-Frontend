import React, { useState } from 'react'
import { AppBar, Box, Container, Divider, IconButton, Toolbar, Typography } from "@mui/material"
import {
    Menu as MenuIcon,
    Home as HomeIcon,
    Dashboard as DashboardIcon,
    LocalLibrary as LibraryIcon,
    Mode,
    LightMode,
    DarkMode
} from "@mui/icons-material"
import { styled, alpha } from "@mui/material/styles"
import Button from '@mui/material/Button';
import { Link as RouterLink, useLocation } from "react-router-dom"
import { useThemeContext } from '../../theme/ThemeContextProvider';

const NavButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
    color: 'inherit',
    position: 'relative',
    padding: '6px 16px',
    borderRadius: '8px',

    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 6,
        left: '10%',
        width: active ? '80%' : '0%',
        height: '2px',
        backgroundColor: theme.palette.secondary.main,
        transition: 'width 0.3s ease',
    },

    '&:hover::after': {
        width: '80%',
    },

    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
    },
}));

const navItems = [
    { label: "Home", path: "/", icon: <HomeIcon /> },
    { label: "Dashboard", path: "/user", icon: <DashboardIcon /> }
]
const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const { mode, toggleTheme } = useThemeContext()
    const location = useLocation()

    const handleDrwaerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const drawer = (
        <Box sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center", mb: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <LibraryIcon sx={{ color: "primary.main", fontSize: 32 }} />
                    <Typography variant='h6' sx={{ fontWeight: 800 }}>LMS</Typography>
                </Box>
            </Box>

        </Box>
    )

    return (
        <>
            <AppBar position='sticky' elevation={0}
                sx={{
                    backgroundColor: "background.paper",
                    backgroundImage: "none",
                }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ height: 70 }}>
                        {/* Logo */}
                        <Typography
                            variant='h5'
                            component={RouterLink}
                            to="/"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                textDecoration: "none",
                                color: "inherit",
                                fontWeight: "800",
                                gap: 1.5,
                                mr: 2
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    p: 1,
                                    borderRadius: 2,
                                    backgroundColor: alpha("#1877F2", 0.15),
                                    color: "#1877F2"
                                }}
                            >
                                <LibraryIcon />
                            </Box>
                            <Box component="span" sx={{
                                display: { xs: "none", lg: "block" }
                            }}>LMS</Box>

                        </Typography>

                        {/* Desktop Navigation */}
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                alignItems: "center",
                                gap: 1
                            }}
                        >
                            {navItems.map((item) => (
                                <NavButton
                                    key={item.label}
                                    component={RouterLink}
                                    to={item.path}
                                >{item.label}</NavButton>
                            ))}
                            <Divider
                                orientation="vertical"
                                flexItem
                                sx={{
                                    mx: 2,
                                    height: 60,
                                    my: "auto",
                                    borderColor: "divider",
                                }}
                            />
                            <IconButton
                                onClick={toggleTheme}
                                color='inherit'
                                sx={{ mr: 1 }}
                            >{mode === "dark" ? <LightMode /> : <DarkMode />}</IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header