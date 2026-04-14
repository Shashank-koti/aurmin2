import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import turmeric from "../assets/turmeric.jpg";
import ginger from "../assets/ginger.jpg";
import spices from "../assets/spices.jpg";
import chillies from "../assets/redChilli.jpg";
import Brochure from "../assets/Brochure.pdf";


const products = [
  {
    title: 'Turmeric',
    image: turmeric,
    desc: 'Sourced from premium regions, our turmeric is known for its rich color and high curcumin content, ensuring superior quality for global markets.',
  },
  {
    title: 'Ginger',
    image: ginger,
    desc: 'We supply carefully selected ginger with strong aroma and freshness, ideal for food processing and international trade.',
  },
  {
    title: 'Spices',
    image: spices,
    desc: 'Delivering authentic Indian spices with consistent quality, sourced directly from trusted farming regions for global excellence.',
  },
  {
    title: 'Red Chillies',
    image: chillies,
    desc: 'Our red chillies are sourced from renowned regions, offering vibrant color and strong pungency for premium export standards.',
  }
];

const Products = () => {
  return (
    <Box id="products" sx={{ py: 12, backgroundColor: '#4B4A3F' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 6, flexWrap: 'wrap', gap: 3 }}>
          <Box maxWidth="600px">
            <Typography variant="h6" color="secondary" gutterBottom sx={{ fontWeight: 600, letterSpacing: 1 }}>
              PRODUCTS
            </Typography>
            <Typography variant="h2" color="text.primary" sx={{ fontWeight: 700, mb: 2 }}>
              What We Export
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              We facilitate the movement of diverse commodities efficiently.
            </Typography>
          </Box>
          <Button
            component="a"
            href={Brochure}
            download
            variant="contained"
            endIcon={<ArrowRightAltIcon />}
            sx={{
              px: 4,
              py: 1.3,
              borderRadius: 2,
              fontWeight: 600,
              fontSize: "1rem",
              border: "1px solid #D4AF37",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
              textTransform: "none",

              "&:hover": {
                backgroundColor: "#C9A24B",
                transform: "translateY(-2px)",
                boxShadow: "0px 6px 25px rgba(0,0,0,0.4)"
              }
            }}
          >
            View Catalog
          </Button>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
          {products.map((product, index) => (
            <Box key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 4,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    border: 'none',
                    bgcolor: '#6B7D5B',
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
                        background: 'linear-gradient(to top, rgba(212, 175, 55, 0.8), transparent)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    />
                  </Box>
                  <CardContent sx={{ backgroundColor: '#6B7D5B', p: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#F8FAFC' }}>
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
