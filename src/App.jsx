import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
