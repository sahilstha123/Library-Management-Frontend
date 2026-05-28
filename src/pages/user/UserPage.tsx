import React from 'react'
import { Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const UserPage = () => {
    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
                User Management
            </Typography>
            <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 'none', border: '1px solid', borderColor: 'divider' }}>
                <Table>
                    <TableHead sx={{ bgcolor: (theme) => theme.palette.mode === 'light' ? 'grey.50' : 'grey.900' }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={4} align="center" sx={{ py: 4, color: 'text.secondary' }}>
                                No users found.
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default UserPage
