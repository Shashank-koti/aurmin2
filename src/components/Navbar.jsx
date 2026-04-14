import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import logo1 from "../assets/logo1.png";

const navItems = ["Home", "About", "Services", "Products", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "#2F5D50",
        height: "100%",
        color: "#F8FAFC",
      }}
    >
      <Box sx={{ my: 3, display: "flex", justifyContent: "center" }}>
        <Box
          component="img"
          src={logo1}
          alt="Aurmin Logo"
          sx={{ height: 45, width: "auto" }}
        />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              style={{
                width: "100%",
                textAlign: "center",
                padding: "15px 0",
                cursor: "pointer",
              }}
            >
              <ListItemText primary={item} />
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              color="#D4AF37"
              sx={{ borderRadius: 20 }}
              href="https://wa.me/917893546664" target="_blank"
            >
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
        background: scrolled ? "#2F5D50" : "transparent",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.2)" : "none",
        transition: "all 0.3s ease-in-out",
        padding: { xs: "0.5rem 0", md: "0.5rem 2rem" },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src={logo1}
              alt="Aurmin Logo"
              sx={{
                height: { xs: 40, md: 50 },
                width: "auto",
                transition: "transform 0.3s",
                filter: scrolled
                  ? "none"
                  : "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
                "&:hover": { transform: "scale(1.05)" },
              }}
            />
          </Link>
        </Box>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon
              fontSize="large"
              sx={{ color: scrolled ? "#D4AF37" : "#ffffff" }}
            />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            {navItems.map((item) => (
              <Box
                key={item}
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={400}
                  style={{ cursor: "pointer" }}
                >
                  <Typography
                    sx={{
                      color: scrolled ? "#F8FAFC" : "#4B4A3F",
                      fontWeight: 500,
                      position: "relative",
                      display: "inline-block",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "0",
                        height: "2px",
                        bottom: "-4px",
                        left: "0",
                        backgroundColor: "#D4AF37",
                        transition: "width 0.3s ease",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                      "&:hover": { color: "#D4AF37" },
                      transition: "color 0.3s",
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
              }}
              href="https://wa.me/917893546664" target="_blank"
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
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
