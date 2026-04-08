import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import image from "../assets/exportHero.jpg"

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          y: y1,
          scale: scale,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
              fontWeight: 800,
              maxWidth: '800px',
              color:"#0F172A",
              mb: 3,
              lineHeight: 1.1,
            }}
          >
            Empowering Global Trade
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              mb: 5,
              maxWidth: '650px',
              fontWeight: 400,
              fontSize: { xs: '1.1rem', md: '1.4rem' },
              lineHeight: 1.6,
              color:"#F8FAFC"
            }}
          >
            We are your premier partner in worldwide logistics, ensuring professional, reliable, and secure export solutions.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                px: 4, py: 1.5, fontSize: '1.1rem', borderRadius: 2,
                backgroundColor: 'white', color: '#0284C7',
                '&:hover': {
                  backgroundColor: '#f1f1f1',
                }
              }}
            >
              Get Started
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              sx={{ 
                color: 'white', 
                borderColor: 'white', 
                px: 4, py: 1.5, 
                fontSize: '1.1rem', 
                borderRadius: 2,
                borderWidth: 2,
                '&:hover': {
                  borderColor: '#e2e8f0',
                  color: '#e2e8f0',
                  borderWidth: 2,
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
