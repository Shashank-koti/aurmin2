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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import navImg from "../assets/navImg.png";

const navItems = ["Home", "About", "Services", "Products", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

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

  const handleNavClick = (item) => {
    if (item === "Products") {
      navigate("/products/fresh-onions");
      return;
    }
    const target = item.toLowerCase();
    if (isHomePage) {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 400,
      });
    } else {
      navigate(`/#${target}`);
    }
  };

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "#2F5D50",
        height: "100%",
        color: "#F8FAFC",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <Box sx={{ my: 3, display: "flex", justifyContent: "center" }}>
        <RouterLink to="/" onClick={() => setMobileOpen(false)}>
          <Box
            component="img"
            src={navImg}
            alt="logo-aurmin"
            sx={{ height: 45, width: "auto" }}
          />
        </RouterLink>
      </Box>

      <List sx={{ px: 2 }}>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            sx={{ borderBottom: "1px solid rgba(230, 211, 163, 0.1)" }}
          >
            <Box
              onClick={() => {
                handleNavClick(item);
                setMobileOpen(false);
              }}
              sx={{
                width: "100%",
                textAlign: "center",
                py: 1.5,
                cursor: "pointer",
                color: "#F8FAFC",
                "&:hover": { color: "#D4AF37" },
              }}
            >
              <Typography sx={{ fontWeight: 500 }}>{item}</Typography>
            </Box>
          </ListItem>
        ))}

        <ListItem disablePadding sx={{ mt: 3 }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 20,
                backgroundColor: "#D4AF37",
                color: "#1F2937",
                fontWeight: 600,
                width: "100%",
              }}
              href="https://wa.me/918125109712"
              target="_blank"
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
        background: scrolled || !isHomePage ? "#2F5D50" : "transparent",
        boxShadow: scrolled || !isHomePage ? "0 4px 20px rgba(0,0,0,0.2)" : "none",
        transition: "all 0.3s ease-in-out",
        padding: { xs: "0.5rem 0", md: "0.5rem 2rem" },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          {isHomePage ? (
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Box
                component="img"
                src={navImg}
                alt="logo-aurmin"
                sx={{
                  height: { xs: 40, md: 50 },
                  width: "auto",
                  transition: "transform 0.3s",
                  filter:
                    scrolled || !isHomePage
                      ? "none"
                      : "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
                }}
              />
            </ScrollLink>
          ) : (
            <RouterLink to="/" style={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                src={navImg}
                alt="logo-aurmin"
                sx={{
                  height: { xs: 40, md: 50 },
                  width: "auto",
                  transition: "transform 0.3s",
                }}
              />
            </RouterLink>
          )}
        </Box>

        {/* Mobile menu trigger */}
        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon
              fontSize="large"
              sx={{ color: scrolled || !isHomePage ? "#D4AF37" : "#ffffff" }}
            />
          </IconButton>
        ) : (
          /* Desktop nav items */
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
                <Box
                  onClick={() => handleNavClick(item)}
                  sx={{ cursor: "pointer" }}
                >
                  <Typography
                    sx={{
                      color: "#F8FAFC",
                      textShadow: scrolled || !isHomePage ? "none" : "0 1px 6px rgba(0,0,0,0.7)",
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
                </Box>
              </Box>
            ))}

            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 20,
                fontWeight: 600,
                paddingX: 3,
                backgroundColor: "#D4AF37",
                color: "#1F2937",
                "&:hover": {
                  backgroundColor: "#C9A24B",
                },
              }}
              href="https://wa.me/918125109712"
              target="_blank"
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
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 270,
            backgroundColor: "#2F5D50",
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
