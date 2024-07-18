import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png'; // Ensure the path to your logo is correct

// Social media icons URLs
const youtubeIconUrl = 'https://cdn.iconscout.com/icon/free/png-256/youtube-85-226402.png';
const facebookIconUrl = 'https://cdn.iconscout.com/icon/free/png-256/facebook-85-226183.png';
const instagramIconUrl = 'https://cdn.iconscout.com/icon/free/png-256/instagram-85-226453.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="" textAlign="center" py="40px">
      <img src={Logo} alt="Logo" style={{ width: '100px', height: 'auto', marginBottom: '20px' }} />
      <Stack gap="20px">
        <Typography variant="h5" style={{ fontFamily: "'Times New Roman', Times, serif", color: "maroon" }}>
        Building Strength, One Workout at a Time
        </Typography>
       
      </Stack>
    </Box>
  );
};

export default Footer;
