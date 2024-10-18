import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ExternalLinks from "./ExternalLink/ExternalLinks";

const linkStyle = { textDecoration: "none", color: "white" };

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#333", py: 4, color: "white" }}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="h6">Institut Al-Ansarr</Typography>
          <Typography variant="body2">Téléphone : +222 41 44 15 72</Typography>
          <Typography variant="body2">
            Email : institutansarr@gmail.com
          </Typography>

          {/* Liens rapides */}
          <Box display="flex" mt={2} justifyContent="center">
            <Box m={1}>
              <Link to="/alansarr/schoolprogram" style={linkStyle}>
                <Typography variant="body2">Programme</Typography>
              </Link>
            </Box>
            <Box m={1}>
              <Link to="/alansarr/pricing" style={linkStyle}>
                <Typography variant="body2">Tarifs</Typography>
              </Link>
            </Box>
            <Box m={1}>
              <Link to="/alansarr/about" style={linkStyle}>
                <Typography variant="body2">A propos de</Typography>
              </Link>
            </Box>
            <Box m={1}>
              <Link to="/alansarr/contactus" style={linkStyle}>
                <Typography variant="body2">Nous contacter</Typography>
              </Link>
            </Box>
          </Box>

          {/* Réseaux sociaux */}
          <ExternalLinks />
        </Box>
      </Container>
      <Typography variant="body1" align="center" sx={{ mt: 4 }}>
        &copy; {new Date().getFullYear()} Institut Al-Ansarr. Tous droits
        réservés.
      </Typography>
    </Box>
  );
};

export default Footer;
