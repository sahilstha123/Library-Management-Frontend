import {
    Book as BookIcon,
    Dashboard as DashboardIcon,
    History as HistoryIcon,
    Person as ProfileIcon,
    Group as UserIcon
} from '@mui/icons-material'
import { alpha, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const SideBar = () => {

    const location = useLocation()
    const sideBarItems = [
        { label: "Dashboard", path: "/user/dashboard", icon: <DashboardIcon fontSize='small' /> },
        { label: "Book", path: "/user/books", icon: <BookIcon fontSize='small' /> },
        { label: "All Users", path: "/user/all", icon: <UserIcon fontSize='small' /> },
        {label: "Reviews", path:"/user/reviews",},
        { label: "Borrow History", path: "/user/borrow", icon: <HistoryIcon fontSize='small' /> },
        { label: "Profile", path: "/user/profile", icon: <ProfileIcon fontSize='small' /> },

    ]

    const isActive = (path: string): boolean => {
        if (path === "/user") {
            return location.pathname === '/user' || location.pathname === '/user/dashboard';
        }
        return location.pathname === path
    }


    return (
        <Box>
            <List>
                {sideBarItems.map((item) => (
                    <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                        <ListItemButton
                            component={NavLink}
                            to={item.path}
                            selected={isActive(item.path)}
                            sx={{
                                borderRadius: 2,
                                '&.Mui-selected': {
                                    backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.05),
                                    color: "primary.main",
                                    '&:hover': {
                                        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.25)
                                    },
                                    '& .MuiListItemIcon-root': {
                                        color: "primary.main",
                                    }

                                },
                                '&:hover': {
                                    backgroundColor: (theme) => alpha(theme.palette.action.hover, 0.1)
                                }
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 40, color: isActive(item.path) ? "primary.main" : "inherit" }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography sx={{
                                        fontWeight: isActive(item.path) ? 700 : 500,
                                        fontSize: "0.9rem"

                                    }}>
                                        {item.label}
                                    </Typography>
                                }
                            >

                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default SideBar