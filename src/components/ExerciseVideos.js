import React from 'react'
import {Box,Stack,Typography} from '@mui/material';
const ExerciseVideos = ({exerciseVideos,name}) => {
    console.log(exerciseVideos);
    if(!exerciseVideos.length) return "Loading";
  return (
    <Box
    sx={{ marginTop:{lg: '60px',xs:'20px'}, marginLeft:{lg:"20px" ,xs:"10px"}}} p="20px">
        <Typography variant='h3' mb="20px" style={{ fontFamily: "'Times New Roman', Times, serif" ,color:"maroon"}}>
            Watch <span style={{color:'crimson',textTransform:'capitalize'}}>{name}</span> exercise videos:
        </Typography>
        <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
             sx={{
                flexDirection: {lg: 'row', xs: 'column'},
                gap: {lg: '80px', xs: '0px'},
                ml:{lg:'45px'},
                marginBottom: { xs: '10px', lg: '0px' }
             }}
        >
            {exerciseVideos?.slice(0,6).map((item,index)=>(
                <a key={index} 
                className="exercise-video" 
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank" rel="noreferrer">
                    <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                    <Box >
                        <Typography variant="h5" color="#000"style={{ fontFamily: "'Times New Roman', Times, serif" ,color:"maroon"}}>
                               {item.video.title} 
                        </Typography>
                        <Typography variant="h6" color="#000"style={{ fontFamily: "'Times New Roman', Times, serif",color:"chocolate" }}>
                               {item.video.channelName}
                        </Typography>
                    </Box>
                </a>

            ))}
        </Stack>
    </Box>
  )
}

export default ExerciseVideos