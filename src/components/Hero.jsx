import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import LanguageIcon from '@mui/icons-material/Language';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import image from "../assets/exportHero.png";
import Brochure from "../assets/Brochure-final.pdf";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.08]);

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: { xs: '100vh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#1a2924',
      }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          y: y1,
          scale: scale,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          zIndex: 0,
        }}
      />

      {/* Multi-layered Premium Contrast Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          background: `
            linear-gradient(90deg, rgba(14, 25, 21, 0.94) 0%, rgba(20, 36, 30, 0.85) 38%, rgba(20, 36, 30, 0.48) 72%, rgba(10, 18, 15, 0.25) 100%),
            linear-gradient(180deg, rgba(12, 22, 19, 0.8) 0%, rgba(15, 28, 23, 0.15) 30%, rgba(15, 28, 23, 0.15) 65%, rgba(75, 74, 63, 0.98) 100%)
          `,
          backdropFilter: 'blur(0.5px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, pt: { xs: 14, md: 12 }, pb: { xs: 8, md: 6 } }}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: 'easeOut' }}
        >
          {/* Main Hero Heading */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.75rem', sm: '3.8rem', md: '4.8rem', lg: '5.5rem' },
              fontWeight: 800,
              maxWidth: '850px',
              mb: 2.5,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              textShadow: '0 4px 24px rgba(0, 0, 0, 0.85), 0 2px 6px rgba(0, 0, 0, 0.95)',
            }}
          >
            Global Export{' '}
            <Box
              component="span"
              sx={{
                color: '#D4AF37',
                display: 'inline-block',
              }}
            >
              Services
            </Box>
          </Typography>

          {/* Subtitle / Description */}
          <Typography
            variant="h5"
            component="p"
            sx={{
              mb: 3.5,
              maxWidth: '680px',
              fontWeight: 400,
              fontSize: { xs: '1.05rem', md: '1.25rem' },
              lineHeight: 1.7,
              color: '#F1F5F9',
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.9)',
            }}
          >
            <Box
              component="span"
              sx={{
                color: '#E6D3A3',
                fontWeight: 600,
              }}
            >
              Aurmin Global Exports
            </Box>{' '}
            is your premier partner in worldwide logistics, delivering certified, secure, and end-to-end export company India solutions.
          </Typography>

          {/* Credibility / Feature Badges */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1.5, sm: 3 }}
            sx={{ mb: 4.5 }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                color: '#E6D3A3',
                fontSize: { xs: '0.88rem', sm: '0.95rem' },
                fontWeight: 500,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
              }}
            >
              <LanguageIcon sx={{ fontSize: 20, color: '#D4AF37' }} />
              Worldwide Network
            </Box>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                color: '#E6D3A3',
                fontSize: { xs: '0.88rem', sm: '0.95rem' },
                fontWeight: 500,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
              }}
            >
              <ShieldOutlinedIcon sx={{ fontSize: 20, color: '#D4AF37' }} />
              Certified Quality
            </Box>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                color: '#E6D3A3',
                fontSize: { xs: '0.88rem', sm: '0.95rem' },
                fontWeight: 500,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
              }}
            >
              <LocalShippingOutlinedIcon sx={{ fontSize: 20, color: '#D4AF37' }} />
              Secure Transit
            </Box>
          </Stack>

          {/* Action Buttons */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5}>
            <Button
              variant="contained"
              size="large"
              href="https://wa.me/918125109712"
              target="_blank"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: '30px',
                backgroundColor: '#D4AF37',
                color: '#1F2937',
                fontWeight: 700,
                fontSize: '1rem',
                px: 3.5,
                py: 1.4,
                boxShadow: '0 4px 20px rgba(212, 175, 55, 0.45)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#C9A24B',
                  boxShadow: '0 6px 25px rgba(212, 175, 55, 0.65)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Get a Quote
            </Button>
            <Button
              component="a"
              href={Brochure}
              download
              variant="outlined"
              size="large"
              startIcon={<DownloadIcon />}
              sx={{
                borderRadius: '30px',
                borderColor: 'rgba(212, 175, 55, 0.6)',
                backgroundColor: 'rgba(47, 93, 80, 0.35)',
                backdropFilter: 'blur(8px)',
                color: '#F8FAFC',
                fontWeight: 600,
                fontSize: '1rem',
                px: 3.5,
                py: 1.4,
                borderWidth: '1.5px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#D4AF37',
                  backgroundColor: 'rgba(212, 175, 55, 0.15)',
                  color: '#D4AF37',
                  borderWidth: '1.5px',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Download Brochure
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
