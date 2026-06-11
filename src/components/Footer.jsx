import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#2F5D50', color: '#F8FAFC', pt: 8, pb: 4, borderTop: 'none' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: { xs: 6, md: 4 } }}>
          <Box sx={{ gridColumn: { xs: 'span 2', md: 'span 1' } }}>
            <Typography variant="h5" color="secondary" sx={{ fontWeight: 800, letterSpacing: '2px', mb: 2 }}>
              AURMIN
            </Typography>
            <Typography variant="body2" component="p" sx={{ color: '#E6D3A3', mb: 3, maxWidth: '100%' }}>
              Aurmin Global exports - Your trusted partner in global trade, logistics, and supply chain management. Connecting the world as a leading export company India.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: '#E6D3A3', '&:hover': { color: '#D4AF37' } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: '#E6D3A3', '&:hover': { color: '#D4AF37' } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: '#E6D3A3', '&:hover': { color: '#D4AF37' } }}>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ gridColumn: { xs: 'span 1' } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Quick Links</Typography>
            <Link href="#home" color="inherit" underline="none" sx={{ display: 'block', mb: 1, color: '#E6D3A3', '&:hover': { color: '#D4AF37' } }}>Home</Link>
            <Link href="#about" color="inherit" underline="none" sx={{ display: 'block', mb: 1, color: '#E6D3A3', '&:hover': { color: '#D4AF37' } }}>About Us</Link>
            <Link href="#services" color="inherit" underline="none" sx={{ display: 'block', mb: 1, color: '#E6D3A3', '&:hover': { color: '#D4AF37' } }}>Services</Link>
            <Link href="#contact" color="inherit" underline="none" sx={{ display: 'block', mb: 1, color: '#E6D3A3', '&:hover': { color: '#D4AF37' } }}>Contact</Link>
          </Box>

          <Box sx={{ gridColumn: { xs: 'span 1' } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Our Services</Typography>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1, color: '#E6D3A3', '&:hover': { color: '#D4AF37' } }}>Worldwide Shipping</Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1, color: '#E6D3A3', '&:hover': { color: '#D4AF37' } }}>Product Sourcing</Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1, color: '#E6D3A3', '&:hover': { color: '#D4AF37' } }}>Customs Compliance</Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1, color: '#E6D3A3', '&:hover': { color: '#D4AF37' } }}>Supply Chain Solutions</Link>
          </Box>

          <Box sx={{ gridColumn: { xs: 'span 2', md: 'span 1' }, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Support</Typography>
            <Typography variant="body2" sx={{ color: '#E6D3A3', mb: 1, whiteSpace: "nowrap" }}>
              Email: info@aurminglobal.com
            </Typography>
            <Typography variant="body2" sx={{ color: '#E6D3A3' }}>
              phone: +91-9177980851
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Typography variant="body2" align="center" sx={{ color: '#E6D3A3' }}>
          &copy; {new Date().getFullYear()} Aurmin Global Trade. All rights reserved. <Link href="https://www.arccreativemedia.com/" sx={{ textDecoration: "none", color: "#E6D3A3", '&:hover': { textDecoration: "underline", color: '#D4AF37' } }}>Powered by ARC Creative Media.</Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
