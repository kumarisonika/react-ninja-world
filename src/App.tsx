import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import VillageList from './components/Village_Table/VillageList';
import VillageDetails from './components/Village_Table/VillageDetails';
import NationList from './components/Nation_Table/NationList';
import NationDetails from './components/Nation_Table/NationDetails';
import { Box, AppBar, Typography, Toolbar, Button, Container } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


function App() {
  const queryClient = new QueryClient();

return (
<QueryClientProvider client={queryClient}>
  <Container maxWidth="lg" className="_container">
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
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
</QueryClientProvider>
);
}

export default App;