// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = ({ isAuthenticated, user }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Home Link */}
        <IconButton edge="start" color="inherit" aria-label="home">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <HomeIcon />
          </Link>
        </IconButton>

        {/* Title */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        Nestoria
        </Typography>

        {/* Cart Link */}
        <Button color="inherit">
          <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none' }}>
            <ShoppingCartIcon /> Cart
          </Link>
        </Button>

        {/* Conditional Authentication Links */}
        {isAuthenticated ? (
          <Button color="inherit">
            <Link to="/profile" style={{ color: 'inherit', textDecoration: 'none' }}>
              <AccountCircleIcon /> {user.name}
            </Link>
          </Button>
        ) : (
          <>
            <Button color="inherit">
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
                Login
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/register" style={{ color: 'inherit', textDecoration: 'none' }}>
                Register
              </Link>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
