import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../index.css";

const pages = [
  { value: "الرئيسية", key: "home" },
  { value: "حول", key: "about" },
  { value: "الخدمات", key: "services" },
  { value: "اتصل بنا", key: "contact" },
  { value: "العنوان وساعات الدوام", key: "Adresse-horaires-ouverture" },
];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const renderNavLinks = (isMobile = false) =>
    pages.map((page) => (
      <MenuItem
        key={page.key}
        onClick={handleCloseNavMenu}
        sx={{ px: isMobile ? 2 : 0 }}
      >
        <Link
          href={`#${page.key}`}
          underline="none"
          sx={{
            color: "black",
            fontWeight: isMobile ? "bold" : 900,
            fontSize: isMobile ? "18px" : "22px",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {page.value}
        </Link>
      </MenuItem>
    ));

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#e3e9e7",
        width: "100%",
        zIndex: 1100,
        direction: "rtl",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Logo */}
          <Typography
            component="a"
            href="#home"
            sx={{
              display: "flex",
              width: { xs: "150px", md: "200px" },
              height: { xs: "60px", md: "80px" },
              textDecoration: "none",
            }}
          >
            <img
              src="/logo2_Boutghratine.png"
              alt="Logo"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              onClick={handleOpenNavMenu}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {renderNavLinks(true)}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {renderNavLinks(false)}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
