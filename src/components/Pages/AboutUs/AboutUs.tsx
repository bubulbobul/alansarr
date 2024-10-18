import { Typography, Container, Box, Card, CardContent } from "@mui/material";

const AboutUs = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Qui sommes-nous ?
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          L'école Al-Ansarr est dédiée à l'enseignement de la langue arabe à des
          étudiants du monde entier. Avec une équipe d'enseignants qualifiés,
          nous avons pour mission de promouvoir l'apprentissage de la langue
          arabe et de la culture islamique.
        </Typography>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            Qu'est-ce que l'Institut Al-Ansarr ?
          </Typography>
          <Card sx={{ my: 2 }}>
            <CardContent>
              <Typography variant="body1">
                L'Institut Al-Ansarr est un institut spécialisé
                dansl'enseignement de la langue arabe suivant le Coran et la
                Sunnah selon la compréhension des pieux prédécesseurs.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            Nos Valeurs
          </Typography>
          <Card sx={{ my: 2 }}>
            <CardContent>
              <Typography variant="body1">
                L'école repose sur des valeurs fondamentales : l'excellence
                académique, l'inclusivité, et le respect des traditions. Nous
                croyons que chaque étudiant mérite un enseignement de qualité,
                quels que soient son origine ou son niveau.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            Notre objectif :
          </Typography>
          <Card sx={{ my: 2 }}>
            <CardContent>
              <Typography variant="body1">
                <b>RENDRE ARABE CE QUI NE L'ÉTAIT PAS.</b>L'objectif de
                l'Institut est de permettre à ses élèves d'obtenir des bases
                solides dans la langue arabe leur permettant de pouvoir enfin
                comprendre le Coran et la Sunnah et ainsi de faire leurs
                premiers pas dans l'étude de la science auprès de nos bien-aimés
                savants.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            Qui dirige cet institut ?
          </Typography>
          <Card sx={{ my: 2 }}>
            <CardContent>
              <Typography variant="body1">
                Le directeur de l'institut est Abu Hamza Hamidou Ibn Ibrahim
                Al-Ansari, d'origine mauritanienne et de nationalité française,
                il étudia la langue arabe ainsi que les sciences islamiques en
                Égypte pendant un peu plus de trois années. Après avoir atteint
                un certain niveau, il débuta l'enseignement de la langue arabe
                dans différents centres (Markez) en ligne, ce qu'il fit pendant
                près de deux années, puis il décida d'ouvrir son propre institut
                qu'il nomma Institut Al-Ansarr.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            Pourquoi avoir ouvert cette institut ?
          </Typography>
          <Card sx={{ my: 2 }}>
            <CardContent>
              <Typography variant="body1">
                Pendant la période d'enseignement du directeur dans les
                différents centres en ligne, une vérité le frappa... Les
                programmes enseignés dans ces instituts et leur organisation au
                sens général étaient inadaptés et ne pouvaient pas assurer une
                évolution rapide, profitable et constante aux élèves. Fermer les
                yeux devant ces différents problèmes était inenvisageable, il
                décida donc d'ouvrir son propre institut, d'écrire son propre
                programme, de choisir minutieusement ses professeurs et il
                essaya du mieux que possible de par faire l'organisation de cet
                institut.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            Les résultats ?
          </Typography>
          <Card sx={{ my: 2 }}>
            <CardContent>
              <Typography variant="body1">
                Après une année d'ouverture, l'institut ne comptant qu'un seul
                et unique professeur a su durant cette période satisfaire plus
                d'une quinzaine d'élèves en leurpermettant en seulement une
                année de progresser d'une manière fulgurante. Je vous invite à
                lire leur témoignagesur la page Avis.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default AboutUs;
