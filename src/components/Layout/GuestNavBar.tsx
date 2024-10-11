import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Stack } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      // id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleClose}
    >
      <MenuItem sx={{ color: "white" }} onClick={handleClose}>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Typography color="primary">Login</Typography>
        </Link>
      </MenuItem>
      <MenuItem sx={{ color: "white" }} onClick={handleClose}>
        <Link to="/registration" style={{ textDecoration: "none" }}>
          <Typography color="primary">Create an account</Typography>
        </Link>
      </MenuItem>
    </Menu>
  );
  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: { xs: "flex" },
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <NavLink to="/">
              <Button startIcon={<HomeIcon />} sx={{ color: "white" }}>
                Home
              </Button>
            </NavLink>
            <NavLink to="/schoolprogram">
              <Button sx={{ color: "white" }}>Program</Button>
            </NavLink>
            <NavLink to="/about">
              <Button sx={{ color: "white" }}>About Us</Button>
            </NavLink>
            <NavLink to="/contactus">
              <Button sx={{ color: "white" }}>Contact US</Button>
            </NavLink>
          </div>
          <div>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              //aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
export default ResponsiveAppBar;
