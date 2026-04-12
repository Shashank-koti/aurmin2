import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden', backgroundColor: '#4B4A3F', color: '#F8FAFC' }}>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
