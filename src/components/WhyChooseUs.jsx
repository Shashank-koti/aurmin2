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
    desc: 'Round-the-clock assistance for all your logistics needs.',
    icon: <SupportAgentIcon sx={{ fontSize: 50, color: '#38BDF8' }} />
  },
  {
    title: 'Trusted Global Network',
    desc: 'Partners and facilities spanning across 120+ countries.',
    icon: <LanguageIcon sx={{ fontSize: 50, color: '#38BDF8' }} />
  },
  {
    title: 'Fast Delivery',
    desc: 'Optimized routing for the quickest transit times possible.',
    icon: <RocketLaunchIcon sx={{ fontSize: 50, color: '#38BDF8' }} />
  },
  {
    title: 'Quality Assurance',
    desc: 'Rigorous inspection processes to ensure product integrity.',
    icon: <HighQualityIcon sx={{ fontSize: 50, color: '#38BDF8' }} />
  }
];

const WhyChooseUs = () => {
  return (
    <Box 
      sx={{ 
        py: 12, 
        backgroundColor: '#f8fafc',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 600, letterSpacing: 1 }}>
            WHY CHOOSE US
          </Typography>
          <Typography variant="h2" color="text.primary" sx={{ fontWeight: 700 }}>
            The Aurmin Advantage
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
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                    p: 2,
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s',
                    '&:hover': {
                      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                      transform: 'translateY(-5px)',
                      borderColor: '#38BDF8'
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>{reason.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#1e293b' }}>
                      {reason.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
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
