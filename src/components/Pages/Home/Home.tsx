import {
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { APP_PATH, DEFAULT_BLUE } from "../../constant";

const Home = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "#f0f0f0", py: 6 }}>
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box flex={1} p={2}>
              <Typography variant="h3" gutterBottom>
                Bienvenue à l'École Al-Ansarr
              </Typography>
              <Typography variant="h6" color="textSecondary" paragraph>
                Apprenez la belle langue arabe avec des professeurs expérimentés
                dans un environnement culturellement enrichissant.
              </Typography>
              <Link to={APP_PATH.LOGIN}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: DEFAULT_BLUE }}
                  size="large"
                >
                  Découvrir nos cours
                </Button>
              </Link>
            </Box>

            <Box flex={1} p={2}>
              <CardMedia
                component="img"
                alt="École de langue arabe"
                image="https://source.unsplash.com/featured/?arabic,language"
                sx={{ borderRadius: 2 }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Pourquoi choisir Al-Ansarr ?
        </Typography>

        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          {features.map((feature, index) => (
            <Box
              key={index}
              flexBasis={{ xs: "100%", sm: "45%", md: "30%" }}
              mb={4}
              p={1}
            >
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  alt={feature.title}
                  height="140"
                  image={feature.imageUrl}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
};

const features = [
  {
    title: "Enseignants arabes qualifiés",
    description:
      "Nos enseignants sont des locuteurs natifs avec plusieurs années d'expérience dans l'enseignement de l'arabe.",
    imageUrl: "https://source.unsplash.com/featured/?arabic,teacher",
  },
  {
    title: "Cours complets",
    description:
      "Nous offrons des cours du niveau débutant au niveau avancé, couvrant la lecture, l'écriture et les compétences orales.",
    imageUrl: "https://source.unsplash.com/featured/?education,arabic",
  },
  {
    title: "Immersion culturelle",
    description:
      "En plus de la langue, notre programme comprend des études culturelles pour une meilleure compréhension du monde arabe.",
    imageUrl: "https://source.unsplash.com/featured/?culture,arab",
  },
];

export default Home;
