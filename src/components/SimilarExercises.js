import React from 'react';
import{Box, Stack,Typography} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader';
const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{ mt:{lg:"10px" ,xs:"0px"}, ml:{lg:"30px" ,xs:"0px"},mb:{lg:"40px" ,xs:"0px"}}}>
      <Typography variant='h3'style={{ fontFamily: "'Times New Roman', Times, serif" ,color:"darkred"}}>
        Exercises that target same muscle group:
      </Typography>
      <Stack direction="row" sx={{ p:2, position:"relative",mt:{lg:"40px" ,xs:"0px"}}}>
        {targetMuscleExercises.length?
        <HorizontalScrollbar data={targetMuscleExercises} isBodyParts={0} />
        :<Loader/>}
        
      </Stack>
      <Typography variant='h3'mt="40px" style={{ fontFamily: "'Times New Roman', Times, serif" ,color:"darkred"}}>
        Exercises that target same equipment:
      </Typography>
      <Stack direction="row" sx={{ p:2, position:"relative",mt:{lg:"40px" ,xs:"0px",}}}>
        {equipmentExercises.length?
        <HorizontalScrollbar data={equipmentExercises} isBodyParts={0} />
        :<Loader/>}
        
      </Stack>

    </Box>

    
  )
}

export default SimilarExercises