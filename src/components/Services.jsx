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
    description: 'We offer reliable, fast, and secure shipping to ports around the world, providing affordable global export services.',
    image: worldwide,
    alt: 'Worldwide shipping - global export services'
  },
  {
    title: 'Product Sourcing',
    description: 'Leverage our vast network of local manufacturers to source the highest quality materials for your import export business India.',
    image: product,
    alt: 'Product Sourcing - import export business India'
  },
  {
    title: 'Customs & Compliance',
    description: 'Navigate complex international trade regulations effortlessly with our expert compliance team in India.',
    image: customs,
    alt: 'Customs and Compliance - exporters from India'
  },
  {
    title: 'Supply Chain Solutions',
    description: 'End-to-end supply chain management tailored to modern international trade company requirements.',
    image: supplychain,
    alt: 'Supply Chain Solutions - international trade company'
  }
];

const Services = () => {
  return (
    <Box id="services" sx={{ py: 12, backgroundColor: '#4B4A3F' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h6" component="p" color="secondary" gutterBottom sx={{ fontWeight: 600, letterSpacing: 1 }}>
            OUR EXPERTISE
          </Typography>
          <Typography variant="h2" component="h2" color="text.primary" sx={{ fontWeight: 600 }}>
            B2B Export Services & Logistics
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
                    alt={service.alt || service.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 3, flexGrow: 1, backgroundColor: '#F3E9D2' }}>
                    <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 700, color: '#1F2937' }}>
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
