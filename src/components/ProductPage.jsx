import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Breadcrumbs,
  Link as MuiLink,
  Button,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link, Navigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VerifiedIcon from '@mui/icons-material/Verified';
import { productsData, productsNavList } from '../data/productsData';
import Brochure from '../assets/Brochure-final.pdf';

const renderItemContent = (itemText) => {
  const dashIndex = itemText.indexOf(' — ');
  if (dashIndex !== -1) {
    const title = itemText.substring(0, dashIndex);
    const desc = itemText.substring(dashIndex + 3);
    return (
      <Typography
        variant="body1"
        sx={{
          color: '#F8FAFC',
          fontSize: { xs: '0.94rem', md: '1.02rem' },
          lineHeight: 1.65,
        }}
      >
        <Box component="span" sx={{ color: '#D4AF37', fontWeight: 600 }}>
          {title}
        </Box>{' '}
        — {desc}
      </Typography>
    );
  }

  const colonIndex = itemText.indexOf(': ');
  if (colonIndex !== -1 && colonIndex < 45) {
    const title = itemText.substring(0, colonIndex);
    const desc = itemText.substring(colonIndex + 2);
    return (
      <Typography
        variant="body1"
        sx={{
          color: '#F8FAFC',
          fontSize: { xs: '0.94rem', md: '1.02rem' },
          lineHeight: 1.65,
        }}
      >
        <Box component="span" sx={{ color: '#D4AF37', fontWeight: 600 }}>
          {title}:
        </Box>{' '}
        {desc}
      </Typography>
    );
  }

  return (
    <Typography
      variant="body1"
      sx={{
        color: '#F8FAFC',
        fontSize: { xs: '0.94rem', md: '1.02rem' },
        lineHeight: 1.65,
      }}
    >
      {itemText}
    </Typography>
  );
};

const ProductPage = ({ productKey }) => {
  const product = productsData[productKey];

  useEffect(() => {
    if (product) {
      document.title = `${product.title} | Aurmin Global Exports`;
    }
  }, [product]);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <Box sx={{ backgroundColor: '#4B4A3F', color: '#F8FAFC', minHeight: '100vh', pb: 14 }}>
      {/* Clean, Premium Minimal Product Header (No noisy background image) */}
      <Box
        sx={{
          backgroundColor: '#24493e',
          backgroundImage: 'linear-gradient(180deg, #1f3f36 0%, #2F5D50 100%)',
          pt: { xs: 13, sm: 14, md: 15 },
          pb: { xs: 4, sm: 4.5, md: 5 },
          borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Container maxWidth="lg">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" sx={{ color: '#D4AF37', opacity: 0.7 }} />}
              aria-label="breadcrumb"
              sx={{ mb: 1.5 }}
            >
              <MuiLink
                component={Link}
                to="/"
                underline="hover"
                sx={{
                  color: '#E6D3A3',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  '&:hover': { color: '#D4AF37' },
                }}
              >
                Home
              </MuiLink>
              <MuiLink
                component={Link}
                to="/products/fresh-onions"
                underline="hover"
                sx={{
                  color: '#E6D3A3',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  '&:hover': { color: '#D4AF37' },
                }}
              >
                Products
              </MuiLink>
              <Typography sx={{ color: '#D4AF37', fontWeight: 600, fontSize: '0.88rem' }}>
                {product.title}
              </Typography>
            </Breadcrumbs>
          </motion.div>

          {/* Title & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', sm: 'center' },
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2.5,
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: '#F8FAFC',
                  lineHeight: 1.2,
                }}
              >
                {product.title}
              </Typography>

              <Stack direction="row" spacing={2} sx={{ flexShrink: 0 }}>
                <Button
                  variant="contained"
                  href={`https://wa.me/918125109712?text=Inquiry%20regarding%20${encodeURIComponent(product.title)}`}
                  target="_blank"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    borderRadius: '25px',
                    backgroundColor: '#D4AF37',
                    color: '#1F2937',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    px: 3,
                    py: 1.1,
                    boxShadow: '0 4px 14px rgba(212, 175, 55, 0.35)',
                    '&:hover': {
                      backgroundColor: '#C9A24B',
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
                  startIcon={<DownloadIcon />}
                  sx={{
                    borderRadius: '25px',
                    borderColor: 'rgba(212, 175, 55, 0.55)',
                    color: '#F8FAFC',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    px: 2.5,
                    py: 1.1,
                    '&:hover': {
                      borderColor: '#D4AF37',
                      backgroundColor: 'rgba(212, 175, 55, 0.12)',
                      color: '#D4AF37',
                    },
                  }}
                >
                  Brochure
                </Button>
              </Stack>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxWidth="lg" sx={{ mt: 4.5 }}>
        {/* Quick Product Tabs / Category Pills */}
        <Box
          sx={{
            display: 'flex',
            gap: 1.5,
            overflowX: 'auto',
            pb: 2,
            mb: 4.5,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {productsNavList.map((item) => {
            const isActive = item.path === product.path;
            return (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  flexShrink: 0,
                  borderRadius: '30px',
                  px: 2.6,
                  py: 0.9,
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textTransform: 'none',
                  backgroundColor: isActive ? '#D4AF37' : 'rgba(47, 93, 80, 0.55)',
                  color: isActive ? '#1F2937' : '#E6D3A3',
                  border: '1px solid',
                  borderColor: isActive ? '#D4AF37' : 'rgba(212, 175, 55, 0.25)',
                  boxShadow: isActive ? '0 4px 15px rgba(212, 175, 55, 0.4)' : 'none',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    backgroundColor: isActive ? '#C9A24B' : 'rgba(47, 93, 80, 0.9)',
                    borderColor: '#D4AF37',
                    color: isActive ? '#1F2937' : '#FFFFFF',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {item.name}
              </Button>
            );
          })}
        </Box>

        {/* Intro Section + Master Commercial Showcase */}
        {product.intro && product.intro.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: '1.2fr 0.8fr' },
                gap: { xs: 4, lg: 5 },
                alignItems: 'stretch',
                mb: 5,
              }}
            >
              {/* Left: Intro Card */}
              <Card
                sx={{
                  backgroundColor: '#2F5D50',
                  borderRadius: 4,
                  boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderLeft: '5px solid #D4AF37',
                  p: { xs: 3, sm: 4, md: 4.5 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 1.8,
                      py: 0.6,
                      borderRadius: 20,
                      backgroundColor: 'rgba(212, 175, 55, 0.15)',
                      border: '1px solid rgba(212, 175, 55, 0.35)',
                      mb: 2.5,
                    }}
                  >
                    <VerifiedIcon sx={{ fontSize: 16, color: '#D4AF37' }} />
                    <Typography
                      sx={{
                        color: '#E6D3A3',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Export Overview
                    </Typography>
                  </Box>

                  {product.intro.map((para, i) => (
                    <Typography
                      key={i}
                      variant="body1"
                      sx={{
                        color: '#F8FAFC',
                        fontSize: { xs: '1.02rem', md: '1.12rem' },
                        lineHeight: 1.85,
                        mb: i !== product.intro.length - 1 ? 2.5 : 0,
                        textShadow: '0 1px 2px rgba(0,0,0,0.35)',
                      }}
                    >
                      {para}
                    </Typography>
                  ))}
                </Box>

                <Box
                  sx={{
                    mt: 4,
                    pt: 3,
                    borderTop: '1px solid rgba(212, 175, 55, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    href={`https://wa.me/918125109712?text=Inquiry%20regarding%20${encodeURIComponent(product.title)}`}
                    target="_blank"
                    startIcon={<WhatsAppIcon />}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      borderRadius: '25px',
                      backgroundColor: '#D4AF37',
                      color: '#1F2937',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      px: 3,
                      py: 1.2,
                      boxShadow: '0 4px 16px rgba(212, 175, 55, 0.4)',
                      '&:hover': {
                        backgroundColor: '#C9A24B',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Inquire for {product.title}
                  </Button>

                  <Button
                    component="a"
                    href={Brochure}
                    download
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    sx={{
                      borderRadius: '25px',
                      borderColor: 'rgba(212, 175, 55, 0.5)',
                      color: '#E6D3A3',
                      fontWeight: 600,
                      fontSize: '0.92rem',
                      px: 2.8,
                      py: 1.2,
                      '&:hover': {
                        borderColor: '#D4AF37',
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        color: '#FFFFFF',
                      },
                    }}
                  >
                    Brochure
                  </Button>
                </Box>
              </Card>

              {/* Right: Master Commercial Showcase Frame */}
              <Card
                sx={{
                  backgroundColor: '#24493e',
                  borderRadius: 4,
                  boxShadow: '0 20px 45px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(212, 175, 55, 0.35)',
                  overflow: 'hidden',
                  position: 'relative',
                  minHeight: { xs: '320px', md: '390px' },
                  display: 'flex',
                }}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={`${product.title} export commodity`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
                    '&:hover': {
                      transform: 'scale(1.06)',
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    background:
                      'linear-gradient(to top, rgba(15, 28, 23, 0.85) 0%, transparent 45%, rgba(15, 28, 23, 0.3) 100%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    pointerEvents: 'none',
                  }}
                >
                  <Box
                    sx={{
                      px: 2.2,
                      py: 0.9,
                      borderRadius: 2,
                      backgroundColor: 'rgba(15, 28, 23, 0.85)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(212, 175, 55, 0.45)',
                    }}
                  >
                    <Typography sx={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.92rem', letterSpacing: '0.04em' }}>
                      {product.title}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
          </motion.div>
        )}

        {/* Dynamic Sections (Varieties, Quality, Specifications, Tables) */}
        {product.sections &&
          product.sections.map((section, idx) => (
            <Box key={idx} sx={{ mb: 5 }}>
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
              >
                <Card
                  sx={{
                    backgroundColor: '#2F5D50',
                    borderRadius: 4,
                    boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Section Header */}
                  <Box
                    sx={{
                      px: { xs: 3, sm: 4, md: 4.5 },
                      py: 3,
                      borderBottom: '1px solid rgba(212, 175, 55, 0.22)',
                      background: 'linear-gradient(90deg, rgba(32, 68, 57, 0.9) 0%, rgba(47, 93, 80, 0.6) 100%)',
                    }}
                  >
                    <Typography
                      variant="h4"
                      component="h2"
                      sx={{
                        color: '#D4AF37',
                        fontWeight: 700,
                        fontSize: { xs: '1.4rem', sm: '1.65rem', md: '1.85rem' },
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {section.title}
                    </Typography>

                    {section.subtitle && (
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: '#E6D3A3',
                          mt: 0.85,
                          fontSize: { xs: '0.92rem', sm: '1.02rem' },
                          fontWeight: 500,
                        }}
                      >
                        {section.subtitle}
                      </Typography>
                    )}
                  </Box>

                  {/* Section Content */}
                  <CardContent sx={{ p: { xs: 3, sm: 4, md: 4.5 } }}>
                    {/* List Section */}
                    {section.type === 'list' && (
                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: { xs: '1fr', md: section.items.length > 3 ? 'repeat(2, 1fr)' : '1fr' },
                          gap: 2.2,
                        }}
                      >
                        {section.items.map((item, itemIdx) => (
                          <Box
                            key={itemIdx}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 2,
                              p: 2.2,
                              borderRadius: 3,
                              backgroundColor: 'rgba(75, 74, 63, 0.4)',
                              border: '1px solid rgba(230, 211, 163, 0.15)',
                              transition: 'all 0.25s ease',
                              '&:hover': {
                                backgroundColor: 'rgba(107, 125, 91, 0.45)',
                                borderColor: 'rgba(212, 175, 55, 0.45)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                              },
                            }}
                          >
                            <CheckCircleIcon
                              sx={{
                                color: '#D4AF37',
                                fontSize: '1.25rem',
                                mt: 0.35,
                                flexShrink: 0,
                              }}
                            />
                            <Box sx={{ flex: 1 }}>{renderItemContent(item)}</Box>
                          </Box>
                        ))}
                      </Box>
                    )}

                    {/* Table Section */}
                    {section.type === 'table' && (
                      <TableContainer
                        component={Paper}
                        elevation={0}
                        sx={{
                          backgroundColor: 'rgba(24, 52, 44, 0.5)',
                          border: '1px solid rgba(212, 175, 55, 0.3)',
                          borderRadius: 3,
                          overflowX: 'auto',
                        }}
                      >
                        <Table sx={{ minWidth: { xs: 480, sm: 550 } }} aria-label={section.title}>
                          <TableHead>
                            <TableRow sx={{ backgroundColor: '#1d3c33' }}>
                              {section.headers.map((hdr, hIdx) => (
                                <TableCell
                                  key={hIdx}
                                  sx={{
                                    color: '#D4AF37',
                                    fontWeight: 700,
                                    fontSize: { xs: '0.95rem', md: '1.05rem' },
                                    borderBottom: '2px solid rgba(212, 175, 55, 0.4)',
                                    py: 2.2,
                                    px: { xs: 2.5, md: 3.5 },
                                    width: hIdx === 0 ? '30%' : '70%',
                                    letterSpacing: '0.04em',
                                  }}
                                >
                                  {hdr}
                                </TableCell>
                              ))}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {section.rows.map((row, rIdx) => (
                              <TableRow
                                key={rIdx}
                                sx={{
                                  backgroundColor:
                                    rIdx % 2 === 0 ? 'rgba(75, 74, 63, 0.25)' : 'rgba(47, 93, 80, 0.35)',
                                  transition: 'background-color 0.2s',
                                  '&:hover': {
                                    backgroundColor: 'rgba(212, 175, 55, 0.12)',
                                  },
                                }}
                              >
                                <TableCell
                                  sx={{
                                    borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
                                    py: 2.2,
                                    px: { xs: 2.5, md: 3.5 },
                                    verticalAlign: 'top',
                                    whiteSpace: 'nowrap',
                                  }}
                                >
                                  <Box
                                    sx={{
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      px: 1.6,
                                      py: 0.5,
                                      borderRadius: '8px',
                                      backgroundColor: 'rgba(212, 175, 55, 0.15)',
                                      border: '1px solid rgba(212, 175, 55, 0.4)',
                                      color: '#D4AF37',
                                      fontWeight: 700,
                                      fontSize: '0.92rem',
                                      letterSpacing: '0.04em',
                                    }}
                                  >
                                    {row[0]}
                                  </Box>
                                </TableCell>
                                <TableCell
                                  sx={{
                                    color: '#F8FAFC',
                                    fontSize: { xs: '0.95rem', md: '1.02rem' },
                                    lineHeight: 1.65,
                                    borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
                                    py: 2.2,
                                    px: { xs: 2.5, md: 3.5 },
                                  }}
                                >
                                  {row[1]}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    )}

                    {/* Paragraph Section */}
                    {section.type === 'paragraph' && (
                      <Box
                        sx={{
                          p: { xs: 2.5, sm: 3.5 },
                          borderRadius: 3,
                          backgroundColor: 'rgba(75, 74, 63, 0.35)',
                          border: '1px solid rgba(212, 175, 55, 0.2)',
                          borderLeft: '4px solid #D4AF37',
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#F8FAFC',
                            fontSize: { xs: '1.02rem', md: '1.12rem' },
                            lineHeight: 1.85,
                          }}
                        >
                          {section.content}
                        </Typography>
                      </Box>
                    )}

                    {/* Structured Entries Section */}
                    {section.type === 'structured' && (
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {section.entries.map((entry, eIdx) => (
                          <Box
                            key={eIdx}
                            sx={{
                              p: { xs: 2.5, sm: 3.5 },
                              borderRadius: 3,
                              backgroundColor: 'rgba(75, 74, 63, 0.35)',
                              border: '1px solid rgba(212, 175, 55, 0.25)',
                              transition: 'all 0.25s ease',
                              '&:hover': {
                                borderColor: 'rgba(212, 175, 55, 0.45)',
                                backgroundColor: 'rgba(107, 125, 91, 0.35)',
                              },
                            }}
                          >
                            <Box
                              sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                px: 1.8,
                                py: 0.5,
                                borderRadius: '20px',
                                backgroundColor: 'rgba(212, 175, 55, 0.15)',
                                border: '1px solid rgba(212, 175, 55, 0.35)',
                                color: '#D4AF37',
                                fontWeight: 700,
                                fontSize: '0.88rem',
                                letterSpacing: '0.04em',
                                mb: 1.8,
                              }}
                            >
                              {entry.label}
                            </Box>
                            <Typography
                              variant="body1"
                              sx={{
                                color: '#F8FAFC',
                                fontSize: { xs: '0.98rem', md: '1.05rem' },
                                lineHeight: 1.8,
                              }}
                            >
                              {entry.value}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}

        {/* Bottom Cross-Commodity Showcase */}
        <Box sx={{ mt: 8, pt: 6, borderTop: '1px solid rgba(212, 175, 55, 0.25)' }}>
          <Typography
            variant="h4"
            sx={{
              color: '#D4AF37',
              fontWeight: 700,
              fontSize: { xs: '1.5rem', md: '1.9rem' },
              mb: 4,
              textAlign: 'center',
              letterSpacing: '-0.01em',
            }}
          >
            Explore Other Export Commodities
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' },
              gap: 2.5,
            }}
          >
            {Object.keys(productsData)
              .filter((key) => key !== productKey)
              .map((key) => {
                const otherProduct = productsData[key];
                return (
                  <Card
                    key={key}
                    component={Link}
                    to={otherProduct.path}
                    sx={{
                      textDecoration: 'none',
                      backgroundColor: '#2F5D50',
                      borderRadius: 3,
                      overflow: 'hidden',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        borderColor: '#D4AF37',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
                        '& img': {
                          transform: 'scale(1.08)',
                        },
                      },
                    }}
                  >
                    <Box sx={{ height: 140, overflow: 'hidden', position: 'relative' }}>
                      <Box
                        component="img"
                        src={otherProduct.image}
                        alt={otherProduct.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
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
                    <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: '#F8FAFC', fontWeight: 600, fontSize: '0.92rem' }}>
                        {otherProduct.title}
                      </Typography>
                      <ArrowForwardIcon sx={{ color: '#D4AF37', fontSize: 18 }} />
                    </Box>
                  </Card>
                );
              })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductPage;
