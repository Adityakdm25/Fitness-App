import React ,{useEffect,useState}from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import { exerciseOptions,fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';//props of below search exercieses frm home page
const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search,setSearch] = useState('')
 
  const [bodyParts,setBodyParts]=useState([]);
  useEffect(() => {
           const fetchExercisesData =async()=>{
              const bodyPartsData =await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
               setBodyParts(['all',...bodyPartsData]);
            }  
            
            fetchExercisesData();

  },[])
  const handleSearch = async()=>{
        window.scrollTo({bottom:1800,behaviour:"smooth"})
         if(search){
            const exercisesData=await fetchData(
              'https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=1300 ',exerciseOptions);
              console.log(exercisesData);

             const searchedExercises=exercisesData.filter(
            (exercise)=>exercise.name.toLowerCase().includes(search)
            ||exercise.target.toLowerCase().includes(search)
            ||exercise.equipment.toLowerCase().includes(search)
            ||exercise.bodyPart.toLowerCase().includes(search)
            
            
              );
              window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
             setSearch('');
             setExercises(searchedExercises); 
         }
  }
  return (
    <Stack alignItems="center" mt="5px" justifyContent="center" p="20px">
    <Typography fontWeight={700} sx={{
      fontSize:{lg:'50px', xs:'35px'}
    }} mb="50px" textAlign="center" style={{ fontFamily: "'Times New Roman', Times, serif" ,color:"crimson" }}> 
       Awesome Exercises For You<br/>
    
    </Typography>
    <Box position="relative" mb="72px">
         <TextField
           sx={{
            input: {fontWeight:'700',
              border:'none',
              borderRadius:'4px'},
              width:{lg:'800px',xs:'350px'},
              backgroundColor: '#fff',
              borderRadius:'0px'
           }}
           
            height="76px"
            value={search}
            onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
            placeholder="Search Exercises"
            type="text"
         />
         <Button className="search-btn"
            sx={{
              bgcolor: 'crimson',
              color:"#fff",
              textTransform: 'none',
              width:{lg:"175px",xs:"80px"},
              fontSize:{lg:'20px',xs:'14px'},
              height:'56px',
              position:"absolute",
              right:'0'
            }}
            onClick={handleSearch}
            
         >
            Search
         </Button>
    </Box>
    <Box sx={{position:'relative',width:'100%',p:'20px'}}>
      <Typography fontSize="40px" mb="40px" borderBottom="maroon" underline  style={{ fontFamily: "'Times New Roman', Times, serif" ,color:"FireBrick" }}>Select your target muscle group for today's workout:</Typography>
      <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart}
      setBodyPart={setBodyPart} isBodyParts={1}/>

    </Box>
    </Stack>
  )
}

export default SearchExercises