import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { value: "المدونة", key: "footer" },
  { value: "اتصل بنا", key: "contact" },
  { value: "الخدمات", key: "services" },
  { value: "حول", key: "about" },
  { value: "الرئيسية", key: "home" },
];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#e3e9e7" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#e3e9e7",
            direction: "rtl",
          }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#home"
            sx={{
              display: { xs: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "black",
              textDecoration: "none",
              width: { xs: "150px", md: "200px" },
              height: { xs: "60px", md: "80px" },
            }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src="/logo2_Boutghratine.png"
              alt="logo"
            />
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
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
              {pages.map((page) => (
                <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                  <Link
                    href={`#${page.key}`}
                    underline="none"
                    sx={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    {page.value}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {pages.map((page) => (
              <Link
                key={page.key}
                href={`#${page.key}`}
                underline="none"
                sx={{
                  color: "black",
                  fontWeight: "900",
                  fontSize: "22px",
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {page.value}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
