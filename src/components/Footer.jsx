import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VerifiedIcon from '@mui/icons-material/Verified';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useLocation, useNavigate } from 'react-router-dom';
import Brochure from '../assets/Brochure-final.pdf';

const certificatesList = [
  {
    title: 'Spices Board of India',
    authority: 'Ministry of Commerce & Industry, Govt. of India',
    desc: 'Registration-cum-Membership Certificate (RCMC) for authorized global export of Indian Spices (Chilli, Turmeric, Cardamom, Ginger, Black Pepper).',
    status: 'Verified Active Exporter'
  },
  {
    title: 'APEDA Certification',
    authority: 'Agricultural & Processed Food Products Export Development Authority',
    desc: 'Authorized exporter of Basmati and Non-Basmati Rice, Fresh Onions, and processed agro-commodities under statutory quality compliance.',
    status: 'Certified Exporter'
  },
  {
    title: 'FSSAI License',
    authority: 'Food Safety and Standards Authority of India',
    desc: 'Central licensing compliance assuring comprehensive food safety, hygiene, and strict traceability from sourcing to destination packaging.',
    status: 'Central License Verified'
  },
  {
    title: 'DGFT — Import Export Code (IEC)',
    authority: 'Directorate General of Foreign Trade, India',
    desc: 'Statutory government accreditation enabling seamless customs clearance and international commercial trade operations.',
    status: 'Registered IEC'
  },
  {
    title: 'AFI & Global Grading Compliance',
    authority: 'Association of Food Industries / CEPC',
    desc: 'Full grading adherence for Cashew Kernels (W180, W210, W240, W320) and standardized moisture, free fatty acid, and aflatoxin limits.',
    status: 'AFI Compliant'
  },
  {
    title: 'Phytosanitary & Lab Inspection Protocols',
    authority: 'NABL & Spices Board Approved Laboratories',
    desc: 'Destination-specific Maximum Residue Level (MRL) screening, fumigation certificates, and microbiological test reports with every consignment.',
    status: 'Export Inspection Verified'
  }
];

const Footer = () => {
  const [certModalOpen, setCertModalOpen] = useState(false);
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
              onClick={() => setCertModalOpen(true)}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.6,
                mb: 1,
                color: '#D4AF37',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': { color: '#F1E5AC', textDecoration: 'underline' }
              }}
            >
              Certificates
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

      {/* Shared Certificates Dialog Modal */}
      <Dialog
        open={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: '#24493e',
            color: '#F8FAFC',
            borderRadius: 4,
            border: '1px solid rgba(212, 175, 55, 0.4)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
            p: { xs: 1.5, sm: 2.5 }
          }
        }}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', pb: 1 }}>
          <Box>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.8,
                px: 1.6,
                py: 0.4,
                borderRadius: 20,
                backgroundColor: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                mb: 1.2
              }}
            >
              <VerifiedIcon sx={{ fontSize: 16, color: '#D4AF37' }} />
              <Typography sx={{ color: '#E6D3A3', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Compliance & Accreditations
              </Typography>
            </Box>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, color: '#F8FAFC' }}>
              Aurmin Global Export Certifications
            </Typography>
            <Typography variant="body2" sx={{ color: '#E6D3A3', mt: 0.5 }}>
              Aurmin Global adheres to mandatory statutory certifications and international quality compliance.
            </Typography>
          </Box>
          <IconButton onClick={() => setCertModalOpen(false)} sx={{ color: '#E6D3A3', '&:hover': { color: '#D4AF37' } }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{ borderColor: 'rgba(212, 175, 55, 0.2)', py: 2.5 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2.5 }}>
            {certificatesList.map((cert, idx) => (
              <Box
                key={idx}
                sx={{
                  p: 2.2,
                  borderRadius: 3,
                  backgroundColor: 'rgba(47, 93, 80, 0.55)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(47, 93, 80, 0.85)',
                    borderColor: '#D4AF37',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, gap: 1 }}>
                    <Typography sx={{ fontWeight: 700, color: '#D4AF37', fontSize: '1.02rem' }}>
                      {cert.title}
                    </Typography>
                    <Box
                      sx={{
                        fontSize: '0.72rem',
                        px: 1.2,
                        py: 0.3,
                        borderRadius: 10,
                        backgroundColor: 'rgba(212, 175, 55, 0.15)',
                        color: '#E6D3A3',
                        fontWeight: 600,
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {cert.status}
                    </Box>
                  </Box>
                  <Typography variant="caption" sx={{ color: '#CBD5E1', display: 'block', mb: 1, fontWeight: 500 }}>
                    {cert.authority}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#F8FAFC', fontSize: '0.88rem', lineHeight: 1.6 }}>
                    {cert.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2.5, justifyContent: 'space-between', flexWrap: 'wrap', gap: 1.5 }}>
          <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap', gap: 1 }}>
            <Button
              component="a"
              href={Brochure}
              download
              variant="contained"
              startIcon={<DownloadIcon />}
              sx={{
                borderRadius: 20,
                backgroundColor: '#D4AF37',
                color: '#1F2937',
                fontWeight: 700,
                fontSize: '0.88rem',
                px: 2.5,
                '&:hover': { backgroundColor: '#C9A24B' }
              }}
            >
              Download Brochure
            </Button>
            <Button
              variant="outlined"
              href="https://wa.me/918125109712?text=Requesting%20official%20copies%20of%20Aurmin%20Global%20Certificates"
              target="_blank"
              startIcon={<WhatsAppIcon />}
              sx={{
                borderRadius: 20,
                borderColor: 'rgba(212, 175, 55, 0.5)',
                color: '#E6D3A3',
                fontWeight: 600,
                fontSize: '0.88rem',
                '&:hover': { borderColor: '#D4AF37', backgroundColor: 'rgba(212, 175, 55, 0.1)', color: '#FFFFFF' }
              }}
            >
              Request Copies via WhatsApp
            </Button>
          </Stack>
          <Button onClick={() => setCertModalOpen(false)} sx={{ color: '#E6D3A3', fontWeight: 600 }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Footer;
