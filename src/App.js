import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material'; // Box type of div
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    document.body.style.fontFamily = "'Times New Roman', Times, serif";
}, []);

  return (
    <Box width="400px" sx={{width: { xl:'1488px'}}} m="auto"> {/*sx property to make website responsive on lagerer devices margin auto*/}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
