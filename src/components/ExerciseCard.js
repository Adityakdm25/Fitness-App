import React from 'react'
import {Link} from 'react-router-dom';
import {Button,Stack,Typography} from '@mui/material';
const ExerciseCard  = ({exercise}) => {
   
  return (
  
    <Link className ="exercise-card" to ={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
        <Stack direction="row">
            <Button sx={{ml:'21px',color:'#fff',background:'Turquoise',
                fontsize:'14px',borderRadius:'20px',textTransform:'capitalize'
            }}>
                {exercise.bodyPart}

            </Button>
            <Button sx={{ml:'21px',color:'#fff',background:'#ffc757',
                fontsize:'14px',borderRadius:'20px',textTransform:'capitalize'
            }}>
                {exercise.target}

            </Button>

        </Stack>
        <Typography ml="21px" color="crimson" fontWeight=
            "bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="22px"  style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default  ExerciseCard