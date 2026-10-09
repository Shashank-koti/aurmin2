import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import ScrollToTop from './components/ScrollToTop';
import { Box } from '@mui/material';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Services />
      <WhyChooseUs />
      <Contact />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Box sx={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden', backgroundColor: '#4B4A3F', color: '#F8FAFC' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/fresh-onions" element={<ProductPage productKey="fresh-onions" />} />
          <Route path="/products/cashew-nuts-kernels" element={<ProductPage productKey="cashew-nuts-kernels" />} />
          <Route path="/products/ginger" element={<ProductPage productKey="ginger" />} />
          <Route path="/products/turmeric" element={<ProductPage productKey="turmeric" />} />
          <Route path="/products/rice" element={<ProductPage productKey="rice" />} />
          <Route path="/products/red-chillies" element={<ProductPage productKey="red-chillies" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
