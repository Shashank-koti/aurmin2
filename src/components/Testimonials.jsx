import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    company: 'Global Retailers Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop',
    review: 'Aurmin has completely transformed our supply chain. Their team is proactive, and shipments always arrive on time with perfect quality control.',
  },
  {
    name: 'David Chen',
    company: 'AgriCorp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop',
    review: 'The transparency and communication provided by the Aurmin platform is unmatched. We rely on them for all our international sourcing.',
  },
  {
    name: 'Elena Silva',
    company: 'Mundo Logistics',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop',
    review: 'Outstanding logistics support. They navigated complex customs compliance for our imports smoothly, saving us weeks of delays.',
  },
  {
    name: 'Marcus Thorne',
    company: 'Thorne Industries',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop',
    review: 'An incredible partner for global expansion. The Aurmin team brings both extreme professionalism and the agility we needed to scale.',
  }
];

// Duplicate array for infinite scroll effect
const scrollItems = [...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: '#ffffff', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 600, letterSpacing: 1 }}>
            TESTIMONIALS
          </Typography>
          <Typography variant="h2" color="text.primary" sx={{ fontWeight: 700 }}>
            What Our Clients Say
          </Typography>
        </Box>
      </Container>
      
      <Box 
        sx={{ 
          position: 'relative',
          display: 'flex',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          width: '100%',
          py: 4,
          '&:hover .scroller': {
            animationPlayState: 'paused',
          }
        }}
      >
        <Box
          className="scroller"
          sx={{
            display: 'flex',
            gap: 4,
            paddingLeft: 4,
            animation: 'scroll 30s linear infinite',
            '@keyframes scroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' }
            }
          }}
        >
          {scrollItems.map((testimonial, index) => (
            <Card 
              key={index}
              sx={{ 
                minWidth: { xs: 300, md: 400 },
                maxWidth: { xs: 300, md: 400 },
                borderRadius: 4,
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                border: '1px solid #f1f5f9',
                display: 'inline-block',
                whiteSpace: 'normal',
              }}
            >
              <CardContent sx={{ pt: 4, pb: 4, px: 4 }}>
                <FormatQuoteIcon sx={{ color: '#e0f2fe', fontSize: 60, mb: -2, ml: -2 }} />
                <Typography variant="body1" sx={{ color: '#475569', mb: 3, fontStyle: 'italic', minHeight: '80px', position: 'relative', zIndex: 1 }}>
                  "{testimonial.review}"
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    sx={{ width: 56, height: 56, border: '2px solid #38BDF8' }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1e293b', lineHeight: 1.2 }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
                      {testimonial.company}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
