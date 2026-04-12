import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 12, backgroundColor: '#4B4A3F' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8, alignItems: 'stretch' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box sx={{ pr: { md: 4 } }}>
              <Typography variant="h6" color="secondary" gutterBottom sx={{ fontWeight: 600, letterSpacing: 1 }}>
                GET IN TOUCH
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, color: '#F8FAFC' }}>
                Contact Our Team
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 6, fontSize: '1.1rem' }}>
                Reach out to us to discuss partnerships, quotes, or complete supply chain solutions designed for your needs.
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Box sx={{ backgroundColor: 'rgba(212,175,55,0.2)', p: 1.5, borderRadius: '50%', mr: 3 }}>
                  <LocationOnIcon color="secondary" fontSize="large" />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#F8FAFC' }}>Global Headquarters</Typography>
                  <Typography variant="body2" color="text.secondary">100 Global Trade Blvd, Suite 400<br/>New York, NY 10001</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Box sx={{ backgroundColor: 'rgba(212,175,55,0.2)', p: 1.5, borderRadius: '50%', mr: 3 }}>
                  <PhoneIcon color="secondary" fontSize="large" />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#F8FAFC' }}>Phone</Typography>
                  <Typography variant="body2" color="text.secondary">+1 (800) 123-4567</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ backgroundColor: 'rgba(212,175,55,0.2)', p: 1.5, borderRadius: '50%', mr: 3 }}>
                  <EmailIcon color="secondary" fontSize="large" />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#F8FAFC' }}>Email</Typography>
                  <Typography variant="body2" color="text.secondary">inquiries@aurmin.com</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          
          <Box>
            <Paper 
              elevation={0} 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                p: { xs: 4, md: 6 }, 
                borderRadius: 4, 
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                border: 'none',
                backgroundColor: '#6B7D5B',
                boxSizing: 'border-box'
              }}
            >
              <form noValidate autoComplete="off" style={{ width: '100%' }}>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: '#F8FAFC' }}>
                  Send Us a Message
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
                  <Box>
                    <TextField 
                      fullWidth label="Full Name" variant="outlined" 
                      InputProps={{ sx: { borderRadius: 2 } }}
                    />
                  </Box>
                  <Box>
                    <TextField 
                      fullWidth label="Email Address" variant="outlined" 
                      InputProps={{ sx: { borderRadius: 2 } }}
                    />
                  </Box>
                  <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }}>
                    <TextField 
                      fullWidth label="Company Name (Optional)" variant="outlined" 
                      InputProps={{ sx: { borderRadius: 2 } }}
                    />
                  </Box>
                  <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }}>
                    <TextField 
                      fullWidth label="Your Message" variant="outlined" multiline rows={4}
                      InputProps={{ sx: { borderRadius: 2 } }}
                    />
                  </Box>
                  <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      size="large" 
                      fullWidth
                      sx={{ py: 2, borderRadius: 2, fontWeight: 700, fontSize: '1.1rem' }}
                    >
                      Submit Inquiry
                    </Button>
                  </Box>
                </Box>
              </form>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
