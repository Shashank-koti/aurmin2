import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import customs from "../assets/customs.jpg";
import product from "../assets/product.jpg";
import supplychain from "../assets/supplychain.jpg";
import worldwide from "../assets/worldwide.jpg";

const services = [
  {
    title: 'Worldwide Shipping',
    description: 'We offer reliable, fast, and secure shipping to ports around the world. Track your cargo in real-time.',
    image: worldwide
  },
  {
    title: 'Product Sourcing',
    description: 'Leverage our vast network of local manufacturers to source the highest quality materials.',
    image: product
  },
  {
    title: 'Customs & Compliance',
    description: 'Navigate complex international trade regulations effortlessly with our expert compliance team.',
    image: customs
  },
  {
    title: 'Supply Chain Solutions',
    description: 'End-to-end supply chain management tailored to your specific business requirements.',
    image: supplychain
  }
];

const Services = () => {
  return (
    <Box id="services" sx={{ py: 12, backgroundColor: '#4B4A3F' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h6" color="secondary" gutterBottom sx={{ fontWeight: 600, letterSpacing: 1 }}>
            OUR EXPERTISE
          </Typography>
          <Typography variant="h2" color="text.primary" sx={{ fontWeight: 700 }}>
            Premium Export Services
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
          {services.map((service, index) => (
            <Box key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                style={{ height: '100%' }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease-in-out',
                    border: 'none',
                    bgcolor: '#F3E9D2',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(212, 175, 55, 0.2)',
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={service.image}
                    alt={service.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 3, flexGrow: 1, backgroundColor: '#F3E9D2' }}>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 700, color: '#1F2937' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#4B4A3F', lineHeight: 1.6 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
