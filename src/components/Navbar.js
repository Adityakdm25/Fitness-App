import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <Stack 
      direction="row"
      alignItems="center"
      sx={{ 
        gap: { sm: '40px', xs: '20px' }, 
        mt: { sm: '32px', xs: '20px' }, 
        px: '20px' 
      }}
    >
      <Link to="/">
        <img 
          src={Logo} 
          alt="logo" 
          style={{ 
            width: '100px', 
            height: '100px', 
            display: 'block'
          }} 
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="center"
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'maroon', borderBottom: '3px solid crimson' }}>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: 'maroon', borderBottom: '3px solid #FF2625' }}>Exercises</a>
      </Stack>
    </Stack>
  );
}

export default Navbar;


//search more on stack :mui documentation  px:padding