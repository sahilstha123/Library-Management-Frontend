import { Facebook, Twitter } from '@mui/icons-material';
import { alpha, Box, Container, Grid, Stack, Typography, useTheme, Link } from '@mui/material';
import { LocalLibrary as LibraryIcon } from '@mui/icons-material';
import React from 'react'

const Footer = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light"

  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "/" },
    ],
    resources: [
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of service", href: "#" }
    ]
  }

  const socialLinks = [
    { icon: <Facebook fontSize='small' />, color: "#1877F2" },
    { icon: <Twitter fontSize='small' />, color: "#1DA1F2" },
  ]
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: isLight ? "#ffffff" : theme.palette.background.paper,
        color: theme.palette.text.secondary,
        pt: { xs: 8, md: 10 },
        pb: 4,
        borderTop: `1px solid ${isLight ? alpha(theme.palette.primary.main, 0.08) : alpha("#ffffff", 0.09)}`,
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>

          {/* Brand Section */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={3}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
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
                <Typography
                  variant='h6'
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 700,
                    letterSpacing: "1px"
                  }}
                >
                  LMS Portal
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ lineHeight: 1.7, maxWidth: 300 }}>
                Empowering learners worldwide with modern tools and expert knowledge, Join our community to access educational resources
              </Typography>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 6, md: 2.5 }}>
            <Typography variant='subtitle2'
              sx={{ color: theme.palette.text.primary, fontWeight: 700, mb: 3 }}>
              Quick Links
            </Typography>
            <Stack spacing={2}>
              {footerLinks.quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  underline="none"
                  sx={{
                    fontSize: "0.875rem",
                    color: "inherit",
                    transition: "all 0.2s",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  {link.name}
                </Link>

              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer