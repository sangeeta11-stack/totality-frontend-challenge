// src/components/Footer.js
import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => 
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
        Nestoria &copy; {new Date().getFullYear()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Link href="/" color="inherit">
            Home
          </Link>
          {' | '}
          <Link href="/cart" color="inherit">
            Cart
          </Link>
          {' | '}
          <Link href="/login" color="inherit">
            Login
          </Link>
          {' | '}
          <Link href="/register" color="inherit">
            Register
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
