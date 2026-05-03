import React from 'react';
import { Box, Container, Typography, Grid, CardContent, Card } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LanguageIcon from '@mui/icons-material/Language';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: '24/7 Support',
    desc: 'Round-the-clock assistance as your dedicated exporters from India.',
    icon: <SupportAgentIcon sx={{ fontSize: 50, color: '#D4AF37' }} />
  },
  {
    title: 'Global Network',
    desc: 'Partners and facilities spanning across 120+ countries for B2B export services.',
    icon: <LanguageIcon sx={{ fontSize: 50, color: '#D4AF37' }} />
  },
  {
    title: 'Fast Delivery',
    desc: 'Optimized routing for quickest transit times as a bulk export supplier.',
    icon: <RocketLaunchIcon sx={{ fontSize: 50, color: '#D4AF37', transform: 'rotate(-45deg)' }} />
  },
  {
    title: 'Inspection',
    desc: 'Rigorous inspection processes to ensure product integrity before shipping.',
    icon: <HighQualityIcon sx={{ fontSize: 50, color: '#D4AF37' }} />
  }
];

const WhyChooseUs = () => {
  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: '#4B4A3F',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h6" component="p" color="secondary" gutterBottom sx={{ fontWeight: 600, letterSpacing: 1 }}>
            WHY CHOOSE US
          </Typography>
          <Typography variant="h3" component="h3" color="text.primary" sx={{ fontWeight: 500 }}>
            Top International Trade Company
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4 }}>
          {reasons.map((reason, index) => (
            <Box key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                    p: 2,
                    backgroundColor: '#F3E9D2',
                    border: '1px solid transparent',
                    transition: 'all 0.3s',
                    '&:hover': {
                      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)',
                      transform: 'translateY(-5px)',
                      borderColor: '#D4AF37'
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>{reason.icon}</Box>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1, color: '#1F2937' }}>
                      {reason.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#4B4A3F' }}>
                      {reason.desc}
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

export default WhyChooseUs;
