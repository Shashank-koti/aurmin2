import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const navItems = ['Home', 'About', 'Services', 'Products', 'Contact'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#38BDF8', height: '100%', color: 'white' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
        AURMIN
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link to={item.toLowerCase()} smooth={true} duration={500} style={{ width: '100%', textAlign: 'center', padding: '15px 0', cursor: 'pointer' }}>
              <ListItemText primary={item} />
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button variant="contained" sx={{ borderRadius: 20, backgroundColor: 'white', color: '#38BDF8', '&:hover': { backgroundColor: '#f1f1f1' } }}>
              Get a Quote
            </Button>
          </Box>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: scrolled ? '#ffffff' : 'transparent',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
        transition: 'all 0.3s ease-in-out',
        padding: { xs: '0.5rem 0', md: '0.5rem 2rem' }
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ 
            fontWeight: 800, 
            letterSpacing: '1px', 
            cursor: 'pointer', 
            color: scrolled ? '#38BDF8' : '#38BDF8',
            transition: 'color 0.3s'
          }}
        >
          <Link to="home" smooth={true} duration={500}>AURMIN</Link>
        </Typography>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon fontSize="large" sx={{ color: scrolled ? '#38BDF8' : '#ffffff' }} />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {navItems.map((item) => (
              <Box key={item} sx={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                <Link to={item.toLowerCase()} smooth={true} duration={500} style={{ cursor: 'pointer' }}>
                  <Typography 
                    sx={{ 
                      color: scrolled ? '#1e293b' : '#1e293b', 
                      fontWeight: 500, 
                      position: 'relative',
                      display: 'inline-block',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0',
                        height: '2px',
                        bottom: '-4px',
                        left: '0',
                        backgroundColor: scrolled ? '#38BDF8' : '#38BDF8',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                      '&:hover': { color: scrolled ? '#38BDF8' : '#38BDF8' },
                      transition: 'color 0.3s'
                    }}
                  >
                    {item}
                  </Typography>
                </Link>
              </Box>
            ))}
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ 
                borderRadius: 20, 
                fontWeight: 600, 
                paddingX: 3,
                backgroundColor: scrolled ? '#38BDF8' : 'white',
                color: scrolled ? 'white' : '#38BDF8',
                '&:hover': {
                  backgroundColor: scrolled ? '#0284C7' : '#f8fafc',
                }
              }}
            >
              Get a Quote
            </Button>
          </Box>
        )}
      </Toolbar>
      
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
