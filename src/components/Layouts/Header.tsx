import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Container,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    useScrollTrigger,
} from '@mui/material';

import {
    Menu as MenuIcon,
    Close as CloseIcon,
    Home as HomeIcon,
    Login as LoginIcon,
    PersonAdd as SignUpIcon,
    LightMode,
    DarkMode,
    LocalLibrary as LibraryIcon,
} from '@mui/icons-material';

import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useThemeContext } from '../../theme/ThemeContextProvider';

const NavButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean; component?: React.ElementType; to?: string }>(({ theme, active }) => ({
    color: 'inherit',
    position: 'relative',
    padding: '10px 22px',
    borderRadius: '8px',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '0.95rem',
    minWidth: 'auto',
    backgroundColor: 'transparent',

    // Disable ALL default Button hover/focus backgrounds
    '&:hover': {
        backgroundColor: 'transparent',
    },
    '&:focus': {
        backgroundColor: 'transparent',
    },
    '&:active': {
        backgroundColor: 'transparent',
    },

    // Sliding underline - ONLY visual feedback
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -4,
        left: '16%',
        width: active ? '68%' : '0%',
        height: '3.5px',
        background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
        transition: 'width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        borderRadius: '4px',
    },

    '&:hover::after': {
        width: '68%',
    },

    // Active state - stronger visual
    '&.active, &[active="true"]': {
        fontWeight: 700,
        '&::after': {
            width: '68%',
            height: '4px',
        },
    },
}));

const ElevatedAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'scrolled',
})<{ scrolled?: boolean }>(({ theme, scrolled }) => ({
    backgroundColor: scrolled
        ? alpha(theme.palette.background.paper, 0.95)
        : theme.palette.background.paper,
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    boxShadow: scrolled ? theme.shadows[4] : 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const navItems = [
    { label: 'Home', path: '/', icon: <HomeIcon fontSize="small" /> },
    { label: 'Sign Up', path: '/signup', icon: <SignUpIcon fontSize="small" /> },
    { label: 'Login', path: '/signin', icon: <LoginIcon fontSize="small" /> },
];

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { mode, toggleTheme } = useThemeContext();
    const location = useLocation();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    const handleDrawerToggle = () => {
        setMobileOpen((prev) => !prev);
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <ElevatedAppBar position="sticky" elevation={0} scrolled={trigger}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ height: 76, justifyContent: 'space-between' }}>
                        {/* Logo */}
                        <Typography
                            variant="h5"
                            component={RouterLink}
                            to="/"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: 'inherit',
                                fontWeight: 800,
                                gap: 1.8,
                                letterSpacing: '-0.02em',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    p: 1.2,
                                    borderRadius: 3,
                                    backgroundColor: alpha('#1877F2', 0.12),
                                    color: '#1877F2',
                                    boxShadow: '0 2px 8px rgba(24, 119, 242, 0.15)',
                                }}
                            >
                                <LibraryIcon sx={{ fontSize: 28 }} />
                            </Box>
                            <Box component="span" sx={{ display: { xs: 'none', lg: 'block' } }}>
                                LMS
                            </Box>
                        </Typography>

                        {/* Desktop Navigation - Tight + Underline Only */}
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'center',
                                gap: 0.5,
                            }}
                        >
                            {navItems.map((item) => (
                                <NavButton
                                    key={item.label}
                                    component={RouterLink}
                                    to={item.path}
                                    active={isActive(item.path)}
                                    className={isActive(item.path) ? 'active' : ''}
                                >
                                    {item.icon}&nbsp;{item.label}
                                </NavButton>
                            ))}

                            <Divider
                                orientation="vertical"
                                flexItem
                                sx={{ mx: 2.5, height: 36, my: 'auto', borderColor: 'divider' }}
                            />

                            <IconButton
                                onClick={toggleTheme}
                                color="inherit"
                                aria-label="Toggle theme"
                                sx={(theme) => ({
                                    '&:hover': {
                                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                    },
                                })}
                            >
                                {mode === 'dark' ? <LightMode /> : <DarkMode />}
                            </IconButton>
                        </Box>

                        {/* Mobile Hamburger */}
                        <IconButton
                            color="inherit"
                            aria-label="Open navigation menu"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' }, ml: 'auto' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </ElevatedAppBar>

            {/* Mobile Drawer remains clean */}
            <Drawer
                variant="temporary"
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 300,
                        borderTopRightRadius: 16,
                        borderBottomRightRadius: 16,
                    },
                }}
            >
                <Box sx={{ p: 3.5 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 4,
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.8 }}>
                            <Box
                                sx={{
                                    p: 1,
                                    borderRadius: 2.5,
                                    backgroundColor: alpha('#1877F2', 0.15),
                                    color: 'primary.main',
                                }}
                            >
                                <LibraryIcon sx={{ fontSize: 34 }} />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
                                LMS Portal
                            </Typography>
                        </Box>

                        <IconButton
                            onClick={handleDrawerToggle}
                            aria-label="Close navigation menu"
                            sx={(theme) => ({
                                color: theme.palette.text.secondary,
                                '&:hover': {
                                    backgroundColor: alpha(theme.palette.action.hover, 0.6),
                                },
                            })}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Divider sx={{ mb: 3 }} />

                    <List sx={{ py: 0 }}>
                        {navItems.map((item, index) => (
                            <ListItem key={item.label} disablePadding sx={{ mb: index === navItems.length - 1 ? 0 : 1 }}>
                                <ListItemButton
                                    component={RouterLink}
                                    to={item.path}
                                    onClick={handleDrawerToggle}
                                    selected={isActive(item.path)}
                                    sx={{
                                        borderRadius: 3,
                                        py: 1.8,
                                        px: 2.5,
                                        '&.Mui-selected': {
                                            backgroundColor: alpha('#1877F2', 0.08),
                                        },
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 44,
                                            color: isActive(item.path) ? 'primary.main' : 'text.secondary',
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography sx={{
                                                fontWeight: isActive(item.path) ? 600 : 500,
                                                color: isActive(item.path) ? 'primary.main' : 'text.secondary'
                                            }}>
                                                {item.label}
                                            </Typography>
                                        }
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Divider sx={{ my: 4 }} />

                    <Button
                        fullWidth
                        variant="outlined"
                        size="large"
                        startIcon={mode === 'dark' ? <LightMode /> : <DarkMode />}
                        onClick={toggleTheme}
                        sx={{
                            py: 1.8,
                            borderRadius: 3,
                            textTransform: 'none',
                            fontWeight: 600,
                        }}
                    >
                        Switch to {mode === 'dark' ? 'Light' : 'Dark'} Mode
                    </Button>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;