import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import VillageList from './components/Village_Table/VillageList';
import VillageDetails from './components/Village_Table/VillageDetails';
import NationList from './components/Nation_Table/NationList';
import NationDetails from './components/Nation_Table/NationDetails';
import { Box, AppBar, Typography, Toolbar, Button, Container } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import SignUp from './components/SignUp_SignIn/SignUp';
import SignIn from './components/SignUp_SignIn/SignIn';

function App() {

return (
<Container maxWidth="lg" className="_container">
  <div className="App">

  <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/home' element={<Home/>} />
  </Routes>

    {/* <Container className='_container'>
      <Header />
    </Container>

    <Container className='_container'>
      <Routes>
     
      </Routes>
        <Route path='/' element={<Home page_name="Villages List" />} />
        <Route path='/village'>
          <Route index element={<VillageList />} />
          <Route path=":id" element={<VillageDetails />} />
        </Route>
        <Route path='/nation'>
          <Route index element={<NationList />} />
          <Route path=":id" element={<NationDetails />} />
        </Route>
    </Container>
    <Footer /> */}
  </div>
</Container>

);
}

export default App;


