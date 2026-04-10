import React from 'react'
import AppBar from "@mui/material/AppBar"
import {
    Menu as MenuIcon,
    Home as HomeIcon,
    Dashboard as DashboardIcon
} from "@mui/icons-material"
import { styled, alpha } from "@mui/material/styles"
import Button from '@mui/material/Button';
import {Link as RouterLink, useLocation} from "react-router-dom"
import { Box } from '@mui/material';

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
        backgroundColor: alpha(theme.palette.common.white, 0.05),
    },
}));

const navItems = [
    { label: "Home", path: "/", icon: <HomeIcon /> },
    { label: "Dashboard", path: "/user", icon: <DashboardIcon /> }
]
const Header = () => {
    return (
        <>
            <Box>
                {navItems.map((item)=>(
                    <NavButton
                    key={item.label}
                    component = {RouterLink}
                    to = {item.path}
                    >
                        {item.label}
                    </NavButton>
                ))}
            </Box>
        </>
    )
}

export default Header