import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

const TarificationPage = () => {
  return (
    <div>
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Tarification des Cours
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Découvrez nos tarifs pour les cours de langue en solo ou en duo, avec
          un minimum d'engagement de 3 heures par semaine.
        </Typography>

        <Box sx={{ my: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Cours Solo
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Tarification: <strong>5€/h</strong>
              </Typography>
              <Divider />
              <Typography variant="body1" sx={{ mt: 2 }}>
                Idéal pour un apprentissage individuel adapté à vos besoins. Un
                minimum d'engagement de <strong>3 heures par semaine</strong>{" "}
                est requis.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ my: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Cours Duo
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Tarification: <strong>2,5€/h</strong> par personne
              </Typography>
              <Divider />
              <Typography variant="body1" sx={{ mt: 2 }}>
                Parfait pour apprendre avec un partenaire. Le prix est réduit
                tout en gardant un enseignement personnalisé. Un minimum
                d'engagement de <strong>3 heures par semaine</strong> est requis
                par personne.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default TarificationPage;
