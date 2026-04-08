import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#ffffff', color: '#1e293b', pt: 8, pb: 4, borderTop: '1px solid #e2e8f0' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: { xs: 6, md: 4 } }}>
          <Box sx={{ gridColumn: { xs: 'span 2', md: 'span 1' } }}>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 800, letterSpacing: '2px', mb: 2 }}>
              AURMIN
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748b', mb: 3, maxWidth: '100%' }}>
              Your trusted partner in global trade, logistics, and supply chain management. Connecting the world, one shipment at a time.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: '#94a3b8', '&:hover': { color: '#38BDF8' } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: '#94a3b8', '&:hover': { color: '#38BDF8' } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: '#94a3b8', '&:hover': { color: '#38BDF8' } }}>
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>
          
          <Box sx={{ gridColumn: { xs: 'span 1' } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Quick Links</Typography>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1, color: '#64748b', '&:hover': { color: '#38BDF8' } }}>Home</Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1, color: '#64748b', '&:hover': { color: '#38BDF8' } }}>About Us</Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1, color: '#64748b', '&:hover': { color: '#38BDF8' } }}>Services</Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1, color: '#64748b', '&:hover': { color: '#38BDF8' } }}>Contact</Link>
          </Box>

          <Box sx={{ gridColumn: { xs: 'span 1' } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Our Services</Typography>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1, color: '#64748b', '&:hover': { color: '#38BDF8' } }}>Worldwide Shipping</Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1, color: '#64748b', '&:hover': { color: '#38BDF8' } }}>Product Sourcing</Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1, color: '#64748b', '&:hover': { color: '#38BDF8' } }}>Customs Compliance</Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1, color: '#64748b', '&:hover': { color: '#38BDF8' } }}>Supply Chain Solutions</Link>
          </Box>

          <Box sx={{ gridColumn: { xs: 'span 2', md: 'span 1' }, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Support</Typography>
            <Typography variant="body2" sx={{ color: '#64748b', mb: 1 }}>
              Email: inquiries@aurmin.com
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748b' }}>
              Phone: +1 (800) 123-4567
            </Typography>
          </Box>
        </Box>
        
        <Divider sx={{ my: 4, borderColor: '#e2e8f0' }} />
        
        <Typography variant="body2" align="center" sx={{ color: '#94a3b8' }}>
          &copy; {new Date().getFullYear()} Aurmin Global Trade. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
