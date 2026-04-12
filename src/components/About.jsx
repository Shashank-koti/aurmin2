import React from 'react';
import { Box, Container, Typography, Grid, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box id="about" sx={{ py: 12, backgroundColor: '#4B4A3F' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 8, alignItems: 'center' }}>
          <Box>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" color="secondary" gutterBottom sx={{ fontWeight: 600, letterSpacing: 1 }}>
                ABOUT AURMIN
              </Typography>
              <Typography variant="h2" color="text.primary" sx={{ fontWeight: 700, mb: 4 }}>
                Building Global Trust.
              </Typography>
              
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
                At Aurmin, our mission is to streamline international trade. We source the finest commodities globally and distribute them with unparalleled precision and efficiency.
              </Typography>
              
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', mb: 4 }}>
                Our vision bridges local producers directly to the global marketplace, establishing sustainable, compliant, and highly transparent supply chains for all of our international partners.
              </Typography>

            </motion.div>
          </Box>
          
          <Box>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper 
                elevation={0}
                sx={{ 
                  position: 'relative',
                  height: '500px',
                  borderRadius: 6,
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2535&auto=format&fit=crop"
                  alt="Warehouse logistics"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Box 
                  sx={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    p: 4,
                    background: 'linear-gradient(transparent, rgba(47, 93, 80, 0.9))',
                    color: 'white'
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>Quality trust</Typography>
                  <Typography variant="body1">exports you can rely on.</Typography>
                </Box>
              </Paper>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
