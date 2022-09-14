import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import VillageList from './components/VillageList';
import VillageDetails from './components/NationDetails';
import NationList from './components/NationList';
import NationDetails from './components/VillageDetails';
import { Box, AppBar, Typography, Toolbar, Button, Container  } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {

return (

  
   <Container maxWidth="lg" className="_container">
  <div className="App">
  <Container className='_container'>
    <Header />
    </Container>

    <Container className='_container'>
    <Routes>
      <Route path='/' element={<Home page_name="Villages List" />} />
      <Route path='/village'>
        <Route index element={<VillageList />} />
        <Route path=":id" element={<VillageDetails />} />
      </Route>
      <Route path='/nation'>
        <Route index element={<NationList />} />
        <Route path=":id" element={<NationDetails />} />
      </Route>
    </Routes>
    </Container>
    <Footer />
  </div>
  </Container>

);
}

export default App;
