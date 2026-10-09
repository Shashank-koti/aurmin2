import React from 'react';
import { Box, Container, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import freshOnions from "../assets/freshOnions.jpg";
import cashewNuts from "../assets/cashewNuts.jpg";
import rice from "../assets/rice.jpg";
import turmeric from "../assets/turmeric.jpg";
import ginger from "../assets/ginger.jpg";
import chillies from "../assets/redChilli.jpg";
import spices from "../assets/spices.jpg";
import Brochure from "../assets/Brochure-final.pdf";

const products = [
  {
    title: 'Fresh Onions',
    image: freshOnions,
    path: '/products/fresh-onions',
    desc: 'High-pungency, export-grade Indian red onions with long shelf life, sorted and graded in modern pack houses.',
    alt: 'Fresh Onions export supplier India - Aurmin Global'
  },
  {
    title: 'Cashew Nuts & Kernels',
    image: cashewNuts,
    path: '/products/cashew-nuts-kernels',
    desc: 'Premium whole white cashew kernels across W180, W210, W240, and W320 grades, compliant with international AFI standards.',
    alt: 'Cashew Nuts and Kernels exporter India - Aurmin Global'
  },
  {
    title: 'Rice — Basmati & Non-Basmati',
    image: rice,
    path: '/products/rice',
    desc: 'World-renowned extra-long slender aromatic Basmati and versatile Non-Basmati varieties, regulated per APEDA export standards.',
    alt: 'Basmati and Non-Basmati Rice export company India'
  },
  {
    title: 'Turmeric',
    image: turmeric,
    path: '/products/turmeric',
    desc: 'Sourced from premium regions, our turmeric is known for its rich color and high curcumin content, ensuring superior quality for global markets.',
    alt: 'Turmeric export products from India - Aurmin Global'
  },
  {
    title: 'Ginger',
    image: ginger,
    path: '/products/ginger',
    desc: 'We supply carefully selected ginger with strong aroma and freshness, ideal for food processing and international trade.',
    alt: 'Ginger export supply - bulk export supplier'
  },
  {
    title: 'Red Chillies',
    image: chillies,
    path: '/products/red-chillies',
    desc: 'Our red chillies are sourced from renowned regions, offering vibrant color and strong pungency for premium export standards.',
    alt: 'Red Chillies - import export business India'
  },
  {
    title: 'Indian Spices',
    image: spices,
    path: '/products/turmeric',
    desc: 'Delivering authentic Indian whole and ground spices with consistent quality, sourced directly from trusted farming regions.',
    alt: 'Authentic Indian Spices - B2B export services'
  }
];

const Products = () => {
  return (
    <Box id="products" sx={{ py: 12, backgroundColor: '#4B4A3F' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 6, flexWrap: 'wrap', gap: 3 }}>
          <Box maxWidth="650px">
            <Typography variant="h6" component="p" color="secondary" gutterBottom sx={{ fontWeight: 600, letterSpacing: 1 }}>
              PRODUCTS
            </Typography>
            <Typography variant="h2" component="h2" color="text.primary" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' } }}>
              Bulk Export Supplier from India
            </Typography>
            <Typography variant="body1" component="p" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              We facilitate the movement of diverse high-grade agricultural commodities efficiently for global export markets.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3.5,
          }}
        >
          {products.map((product, index) => (
            <Box key={index}>
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.15 }}
                style={{ height: '100%' }}
              >
                <Card
                  component={Link}
                  to={product.path}
                  sx={{
                    height: '100%',
                    textDecoration: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 4,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.22)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    bgcolor: '#2F5D50',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.35s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 16px 36px rgba(0,0,0,0.35)',
                      borderColor: '#D4AF37',
                      '& img': {
                        transform: 'scale(1.08)',
                      },
                      '& .explore-link': {
                        color: '#D4AF37',
                        transform: 'translateX(4px)',
                      },
                    },
                  }}
                >
                  <Box sx={{ overflow: 'hidden', height: 230, position: 'relative' }}>
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.alt || product.title}
                      sx={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(31, 63, 54, 0.85) 0%, transparent 60%)',
                      }}
                    />
                  </Box>
                  <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 1.2, color: '#F8FAFC', fontSize: '1.25rem' }}>
                        {product.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#E6D3A3', lineHeight: 1.65, mb: 2 }}>
                        {product.desc}
                      </Typography>
                    </Box>

                    <Box
                      className="explore-link"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.8,
                        color: '#E6D3A3',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        transition: 'all 0.25s ease',
                        pt: 1,
                        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
                      }}
                    >
                      <span>Explore Specifications</span>
                      <ArrowRightAltIcon sx={{ fontSize: 20 }} />
                    </Box>
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
