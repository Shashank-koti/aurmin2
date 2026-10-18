import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLocation, useNavigate } from 'react-router-dom';
import iecPdf from '../assets/certificates/iec-certificate.pdf';
import gstPdf from '../assets/certificates/gst-certificate.pdf';
import spicesBoardPdf from '../assets/certificates/spices-board-certificate.pdf';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (anchor) => {
    if (location.pathname === '/') {
      const element = document.getElementById(anchor.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/${anchor}`);
    }
  };

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
            <Link
              onClick={() => handleLinkClick('#home')}
              sx={{ display: 'block', mb: 1, color: '#E6D3A3', cursor: 'pointer', textDecoration: 'none', '&:hover': { color: '#D4AF37' } }}
            >
              Home
            </Link>
            <Link
              onClick={() => handleLinkClick('#about')}
              sx={{ display: 'block', mb: 1, color: '#E6D3A3', cursor: 'pointer', textDecoration: 'none', '&:hover': { color: '#D4AF37' } }}
            >
              About Us
            </Link>
            <Link
              onClick={() => handleLinkClick('#services')}
              sx={{ display: 'block', mb: 1, color: '#E6D3A3', cursor: 'pointer', textDecoration: 'none', '&:hover': { color: '#D4AF37' } }}
            >
              Services
            </Link>
            <Link
              onClick={() => handleLinkClick('#contact')}
              sx={{ display: 'block', mb: 1, color: '#E6D3A3', cursor: 'pointer', textDecoration: 'none', '&:hover': { color: '#D4AF37' } }}
            >
              Contact
            </Link>
            <Link
              href={iecPdf}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'block', mb: 1, color: '#E6D3A3', cursor: 'pointer', textDecoration: 'none', '&:hover': { color: '#D4AF37' } }}
            >
              IEC Certificate
            </Link>
            <Link
              href={gstPdf}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'block', mb: 1, color: '#E6D3A3', cursor: 'pointer', textDecoration: 'none', '&:hover': { color: '#D4AF37' } }}
            >
              GST Certificate
            </Link>
            <Link
              href={spicesBoardPdf}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'block', mb: 1, color: '#E6D3A3', cursor: 'pointer', textDecoration: 'none', '&:hover': { color: '#D4AF37' } }}
            >
              Spices Board Certificate
            </Link>
          </Box>

          <Box sx={{ gridColumn: { xs: 'span 1' } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Our Services</Typography>
            <Link
              onClick={() => handleLinkClick('#services')}
              sx={{ display: 'block', mb: 1, color: '#E6D3A3', cursor: 'pointer', textDecoration: 'none', '&:hover': { color: '#D4AF37' } }}
            >
              Worldwide Shipping
            </Link>
            <Link
              onClick={() => handleLinkClick('#services')}
              sx={{ display: 'block', mb: 1, color: '#E6D3A3', cursor: 'pointer', textDecoration: 'none', '&:hover': { color: '#D4AF37' } }}
            >
              Product Sourcing
            </Link>
            <Link
              onClick={() => handleLinkClick('#services')}
              sx={{ display: 'block', mb: 1, color: '#E6D3A3', cursor: 'pointer', textDecoration: 'none', '&:hover': { color: '#D4AF37' } }}
            >
              Supply Chain Solutions
            </Link>
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
