import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import agri from "../assets/agriculture.jpg";
import textile from "../assets/textiles.jpg";


const products = [
  {
    title: 'Agriculture',
    image: agri,
    desc: 'Premium grains, nuts, and organic goods sourced globally.',
  },
  {
    title: 'Textiles',
    image: textile,
    desc: 'High-quality sustainable fabrics and engineered textiles.',
  },
  {
    title: 'Spices',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2670&auto=format&fit=crop',
    desc: 'Authentic rich spices traded straight from origin farms.',
  },
  {
    title: 'Machinery',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop',
    desc: 'Heavy-duty industrial equipment for modern manufacturing.',
  }
];

const Products = () => {
  return (
    <Box id="products" sx={{ py: 12, backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 6, flexWrap: 'wrap', gap: 3 }}>
          <Box maxWidth="600px">
            <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 600, letterSpacing: 1 }}>
              INDUSTRIES
            </Typography>
            <Typography variant="h2" color="text.primary" sx={{ fontWeight: 700, mb: 2 }}>
              What We Export
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              We facilitate the movement of diverse commodities efficiently.
            </Typography>
          </Box>
          <Button variant="outlined" color="primary" endIcon={<ArrowRightAltIcon />} sx={{ px: 3, py: 1, borderRadius: 2 }}>
            View Catalog
          </Button>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
          {products.map((product, index) => (
            <Box key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 4,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    border: '1px solid #f1f5f9',
                    '&:hover img': {
                      transform: 'scale(1.1)',
                    },
                    '&:hover .overlay': {
                      opacity: 1,
                    }
                  }}
                >
                  <Box sx={{ overflow: 'hidden', height: 250, position: 'relative' }}>
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.title}
                      sx={{ 
                        height: '100%', 
                        width: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    <Box 
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'linear-gradient(to top, rgba(56, 189, 248, 0.9), transparent)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    />
                  </Box>
                  <CardContent sx={{ backgroundColor: 'white', p: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#1e293b' }}>
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.desc}
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

export default Products;
