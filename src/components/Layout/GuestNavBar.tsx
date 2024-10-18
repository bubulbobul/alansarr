import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";

import logo from "../../assets/logo_al_ansarr.png";

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
      <AppBar
        position="static"
        sx={{ backgroundColor: "#1D3557", height: "64px" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "100%",
            position: "relative",
          }}
        >
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                height: "120px",
                position: "absolute",
                top: "-35px",
                left: "0",
                backgroundColor: "#1D3557",
                borderRadius: "0 0 50% 50%",
                paddingBottom: "15px",
              }}
            >
              <img
                src={logo}
                alt="An-Ansaar Logo"
                style={{
                  height: "130px",
                  paddingLeft: "5px",
                }}
              />
            </div>
          </NavLink>

          <div>
            <NavLink to="/schoolprogram">
              <Button sx={{ color: "white", marginRight: "10px" }}>
                Programme
              </Button>
            </NavLink>
            <NavLink to="/pricing">
              <Button sx={{ color: "white", marginRight: "10px" }}>
                Tarifs
              </Button>
            </NavLink>
            <NavLink to="/about">
              <Button sx={{ color: "white", marginRight: "10px" }}>
                A propos de
              </Button>
            </NavLink>
            <NavLink to="/contactus">
              <Button sx={{ color: "white", marginRight: "10px" }}>
                Nous contacter
              </Button>
            </NavLink>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
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
