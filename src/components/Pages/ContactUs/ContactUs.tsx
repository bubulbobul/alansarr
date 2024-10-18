import {
  Typography,
  Button,
  Container,
  Box,
  TextField,
  Card,
  CardContent,
} from "@mui/material";

const ContactPage = () => {
  return (
    <div>
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Nous Contacter
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Pour toute question ou renseignement, n'hésitez pas à nous contacter
          via les informations ci-dessous ou à nous envoyer un message.
        </Typography>

        <Box sx={{ my: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Informations de Contact
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                <strong>Numéro de téléphone :</strong> +222 41 44 15 72
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                <strong>Adresse e-mail :</strong> institutansarr@gmail.com
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ my: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Envoyer un message
              </Typography>

              <form>
                <TextField
                  fullWidth
                  label="Nom"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Adresse e-mail"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{ mb: 2 }}
                />
                <Button variant="contained" color="primary" fullWidth>
                  Envoyer
                </Button>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default ContactPage;
