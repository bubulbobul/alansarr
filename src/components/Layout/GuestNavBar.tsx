import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink } from "react-router-dom";
import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import logo from "../../assets/logo_al_ansarr.png";
import { APP_PATH, DEFAULT_BLUE } from "../constant";

function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
      <Link to={APP_PATH.LOGIN} style={{ textDecoration: "none" }}>
        <MenuItem sx={{ color: "white" }} onClick={handleClose}>
          <Typography color="primary">Login</Typography>
        </MenuItem>
      </Link>
      <Link to={APP_PATH.REGISTRATION} style={{ textDecoration: "none" }}>
        <MenuItem sx={{ color: "white" }} onClick={handleClose}>
          <Typography color="primary">Create an account</Typography>
        </MenuItem>
      </Link>
    </Menu>
  );

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: DEFAULT_BLUE,
        height: "100%",
      }}
    >
      <img src={logo} alt="An-Ansaar Logo" style={{ height: "80px" }} />
      <List>
        <ListItem
          component={NavLink}
          to={APP_PATH.HOME}
          sx={{ color: "white" }}
        >
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          component={NavLink}
          to={APP_PATH.PROGRAM}
          sx={{ color: "white" }}
        >
          <ListItemText primary="Programme" />
        </ListItem>
        <ListItem
          component={NavLink}
          to={APP_PATH.PRICING}
          sx={{ color: "white" }}
        >
          <ListItemText primary="Tarifs" />
        </ListItem>
        <ListItem
          component={NavLink}
          to={APP_PATH.ABOUT}
          sx={{ color: "white" }}
        >
          <ListItemText primary="A propos de" />
        </ListItem>
        <ListItem
          component={NavLink}
          to={APP_PATH.CONTACT}
          sx={{ color: "white" }}
        >
          <ListItemText primary="Nous contacter" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: DEFAULT_BLUE, height: "64px" }}
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
            to={APP_PATH.HOME}
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
                backgroundColor: DEFAULT_BLUE,
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

          {/* Display menu icon on mobile */}
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="start"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <div>
              <NavLink to={APP_PATH.PROGRAM}>
                <Button sx={{ color: "white", marginRight: "10px" }}>
                  Programme
                </Button>
              </NavLink>
              <NavLink to={APP_PATH.PRICING}>
                <Button sx={{ color: "white", marginRight: "10px" }}>
                  Tarifs
                </Button>
              </NavLink>
              <NavLink to={APP_PATH.ABOUT}>
                <Button sx={{ color: "white", marginRight: "10px" }}>
                  A propos de
                </Button>
              </NavLink>
              <NavLink to={APP_PATH.CONTACT}>
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
          )}
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}

export default ResponsiveAppBar;
