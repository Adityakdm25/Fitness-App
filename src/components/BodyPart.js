import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import Icon from '../assets/icons/gym.png'; // Ensure the path to your icon is correct

const descriptions = {
  back: [
    'Supports posture.',
    'Aids in lifting.',
    'Maintains spine health.',
  ],
  cardio: [
    'Boosts heart health.',
    'Improves stamina.',
    'Helps in weight loss.',
  ],
  chest: [
    'Builds upper body strength.',
    'Key for bench press.',
    'Balances upper body.',
  ],
  'lower arms': [
    'Strengthens grip.',
    'Enhances hand strength.',
    'Prevents injuries.',
  ],
  'lower legs': [
    'Builds calf muscles.',
    'Improves balance.',
    'Supports running.',
  ],
  neck: [
    'Supports head mobility.',
    'Reduces neck pain.',
    'Important for movement.',
  ],
  shoulders: [
    'Increases mobility.',
    'Supports lifting.',
    'Stabilizes joints.',
  ],
  'upper arms': [
    'Builds arm muscles.',
    'Key for curls.',
    'Enhances strength.',
  ],
  'upper legs': [
    'Strengthens legs.',
    'Key for squats.',
    'Boosts performance.',
  ],
  waist: [
    'Strengthens core.',
    'Improves posture.',
    'Prevents injuries.',
  ],
  all: [
    'Engages all muscle groups.',
    'Promotes overall strength.',
    'Balanced workout routine.',
  ],
};

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const itemLower = item.toLowerCase();
  const descriptionPoints = descriptions[itemLower] || ['No description available.'];

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="body-part-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #FF0000' : 'none',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '320px',
        cursor: 'pointer',
        gap: '20px',
        padding: '10px',
        boxShadow: bodyPart === item ? '0 0 10px rgba(0, 0, 0, 0.1)' : 'none',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon} alt="gym icon" style={{ width: '40px', height: '40px' }} />
      <Typography fontSize="24px" fontWeight="bold" color="crimson" textTransform="capitalize">
        {item}
      </Typography>
      <Box component="ul" sx={{ padding: 0, margin: 0, listStyleType: 'disc' }}>
        {descriptionPoints.map((point, index) => (
          <Typography key={index} fontSize="20px" color="maroon" textAlign="left"  style={{ fontFamily: "'Times New Roman', Times, serif" }} component="li" sx={{ marginLeft: '16px', padding: '4px 0' }}>
            {point}
          </Typography>
        ))}
      </Box>
    </Stack>
  );
};

export default BodyPart;





