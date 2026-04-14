import {
    Book as BookIcon,
    Dashboard as DashboardIcon,
    History as HistoryIcon,
    Person as ProfileIcon,
    Group as UserIcon
} from '@mui/icons-material'
import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const SideBar = () => {

    const sideBarItems = [
        { label: "Dashboard", path: "/user", icon: <DashboardIcon fontSize='small' /> },
        { label: "Book", path: "/user/books", icon: <BookIcon fontSize='small' /> },
        { label: "All Users", path: "/user/user-lists", icon: <UserIcon fontSize='small' /> },
        { label: "Borrow History", path: "/user/borrow", icon: <HistoryIcon fontSize='small' /> },
        { label: "Profile", path: "/user/profile", icon: <ProfileIcon fontSize='small' /> },

    ]

    const isActive = (path: string) => {
        if (path === "/user") {
            return location.pathname === "/user"
        }
        return location.pathname.startsWith(path)
    }
    return (
        <Box>
            <Box>
                <Typography>Welcome Back</Typography>
                <Typography>Sahil Shrestha</Typography>
                <Divider sx={{ py:1 ,mx:1 , opacity: 0.6 }} />
            </Box>
        </Box>
    )
}

export default SideBar