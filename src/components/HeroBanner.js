import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from "../assets/images/homepage.jpg";

const HeroBanner = () => {
  return (
    <Box 
      sx={{
        mt: { lg: '40px', xs: '70px' },
        ml: { sm: '50px' },
        display: 'flex',
        flexDirection: { lg: 'row', xs: 'column' },
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        p: '20px'
      }}
    >
      <Box 
        sx={{ 
          maxWidth: { lg: '50%', xs: '100%' },
          textAlign: { lg: 'left', xs: 'center' }
        }}
      >
        <Typography 
          color="crimson" 
          fontWeight="700" 
          fontSize="55px" 
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          Welcome to Fitness Guide!
        </Typography>
        <Button 
          variant="contained" 
          href="#exercises"
          sx={{ 
            backgroundColor: "crimson", 
            color: "white", 
            padding: '10px', 
            mt: '20px' 
          }}
        >
          Explore Exercises
        </Button>
        
        <Typography 
          fontWeight="500" 
          sx={{ fontSize: { lg: '40px', xs: '35px' } ,color:"maroon"}} 
          mb="23px" 
          mt="30px" 
          
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          Here we empower you to <br />Discover Your Strength
        </Typography>
        <Typography 
          fontSize="22px" 
          lineHeight="35px" 
          mb={4} 
          style={{ fontFamily: "'Times New Roman', Times, serif" ,color:"maroon"}}
        >
          Check Out most effective exercises and <br />start your fitness journey today!
        </Typography>
       
        <Typography
          fontWeight={600}
          color="red"
          mt="150px"
          ml="200px"
          mb="50px"
          sx={{
            opacity: 0.1,
            display: { lg: 'block', xs: 'none' },
            
          }}
          fontSize="100px"
          whiteSpace="nowrap" 
        >
          Sweat. Smile. Repeat.
        </Typography>
      </Box>
      <Box 
        sx={{ 
          maxWidth: { lg: '50%', xs: '100%' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          height: '100%',
          mt: { lg: '-20px', xs: '0' }
        }}
      >
        <img 
          src={HeroBannerImage} 
          alt="banner"
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
        />
      </Box>
    </Box>
  );
};

export default HeroBanner;




