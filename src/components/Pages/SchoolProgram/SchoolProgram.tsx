import { Typography, Container, Box, Card, CardContent } from "@mui/material";

const SchoolProgram = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" align="center" gutterBottom>
            Notre Programme
          </Typography>
          <Typography variant="body1" align="center">
            Le programme de l'institut Al-Ansarr est une reprise des célèbres
            tomes de Médine avec de nombreuses améliorations apportées par le
            directeur de l'institut. Il est composé d'un niveau introductif
            suivi de trois niveaux.
          </Typography>
          <Card sx={{ my: 2 }}>
            <CardContent>
              <Typography variant="h6">
                Niveau Introductif : (durée ≈ 2 mois)
              </Typography>
              <Typography variant="body1">
                Ce niveau est divisé en trois parties.
                <ul>
                  <li>
                    Dans la première, l'élève apprendra à lire et à écrire en
                    arabe.
                  </li>
                  <li>
                    Puis dans la seconde, il enrichira son vocabulaire en
                    mémorisant des listes de mots rangées par thèmes.
                  </li>
                  <li>
                    Enfin, dans la troisième partie, il mémorisera des verbes et
                    étudiera les règles primordiales à la construction des
                    phrases.
                  </li>
                </ul>{" "}
              </Typography>
              <br />
              <Typography variant="body1">
                En terminant ce niveau, l'élève pourra lire, écrire etformer des
                phrases simples en arabe.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ my: 2 }}>
            <CardContent>
              <Typography variant="h6">Niveau 1 : (durée ≈ 6 mois)</Typography>
              <Typography variant="body1">
                Ce niveau comprend des exercices pour ancrer les règles
                grammaticales et enrichir le vocabulaire à travers la lecture de
                textes religieux. Les élèves pratiqueront aussi l'expression
                écrite et orale.
              </Typography>
              <Typography variant="body1">
                Ce niveau est composé de trois parties.
                <ul>
                  <li>
                    Partie 1 (Les règles) : l'élève ancrera les règles apprises
                    dans le niveau introductif à travers de nombreux exercices,
                    il apprendra également de nouvelles règles de grammaire.
                  </li>
                  <li>
                    Partie 2 (Compréhension de texte) : l'élève lira des textes
                    riches en vocabulaire religieux et avec l'aide de son
                    professeur, il extraira le nouveau vocabulaire qu'il devra
                    par la suite mémoriser à la maison.
                  </li>
                  <li>
                    Partie 3 (Expression Écrite/Orale) : dans cette partie,
                    l'élève mettra en pratique les règles et le nouveau
                    vocabulaire acquis dans les parties précédentes à travers
                    des exercices écrits et oraux.
                  </li>
                </ul>{" "}
              </Typography>
              <br />
              <Typography variant="body1">
                En complétant ce niveau l'élève aura acquis le niveau
                débrouillard, ce qui lui permettra de se débrouiller dansla
                plupart des situations de la vie pour s'exprimer et se faire
                comprendre en arabe même si ce n'est pas de la meilleure
                manière, son niveau de compréhension aura nettement augmenté.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ my: 2 }}>
            <CardContent>
              <Typography variant="h6">Niveau 2 : (durée ≈ 6 mois)</Typography>
              <Typography variant="body1">
                L'élève approfondira ses connaissances grammaticales avec
                l'analyse de phrases et la lecture de textes riches en
                vocabulaire religieux. L'expression écrite et orale est
                également mise en avant.
              </Typography>
              <Typography variant="body1">
                Ce niveau est composé de trois parties.
                <ul>
                  <li>
                    Partie 1 (Les règles) : l'élève apprendra à faire des
                    analyses grammaticales, ce qui lui permettra de mieux
                    comprendre la construction des phrases et leur sens. Ceci
                    lui permettra également de s'exprimer en faisant le moins
                    d'erreurs possible.
                  </li>
                  <li>
                    Partie 2 (Compréhension de texte) : l'élève lira des textes
                    riches en vocabulaire religieux et, avec l'aide de son
                    professeur, il extraira le nouveau vocabulaire qu'il devra
                    par la suite mémoriser à la maison.
                  </li>
                  <li>
                    Partie 3 (Expression Écrite/Orale) : dans cette partie,
                    l'élève mettra en pratique les règles et le nouveau
                    vocabulaire acquis dans les parties précédentes à traversdes
                    exercices écrits et oraux.
                  </li>
                </ul>{" "}
              </Typography>
              <br />
              <Typography variant="body1">
                En complétant ce niveau, l'élève aura une base dans lagrammaire
                arabe, et il aura le vocabulaire lui permettantde comprendre la
                majorité de ce qui lui est dit et des'exprimer correctement
                aussi bien à l'écrit qu'à l'oral.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ my: 2 }}>
            <CardContent>
              <Typography variant="h6">Niveau 3 : (durée ≈ 8 mois)</Typography>
              <Typography variant="body1">
                Ce niveau couvre trois matières : la grammaire (النحو),
                l'étymologie des mots (الصرف), et la croyance (العقيدة). Les
                élèves étudieront des textes classiques comme le poème de
                Al-Ajroumiyyah et les Quatre Fondements de Cheikh Mohamed Ibn
                Abdel-Wahab.
              </Typography>
              <Typography variant="body1">
                <b>Les livres étudiés seront les suivants :</b>
                <ul>
                  <li>
                    Le Poème de Al-Ajroumiyyah du Savant Mohammed Abd Llah Ibn
                    Ahmed As-Shanqiti accompagné de son explication et de
                    nombreux exercices. (Grammaire)
                  </li>
                  <li>
                    التطبيق الصرى: Un livre dans les règles de l'étymologie.
                    (الصرف)
                  </li>
                  <li>
                    Les leçons importantes à l'ensemble de la communauté de
                    Cheikh Ibn Baz
                  </li>
                  <li>
                    Les Quatre règles de Cheikh Mohamed Ibn Abdel-Wahab
                    (Croyance)
                  </li>
                  <li>
                    Les trois fondements de Cheikh Mohamed Ibn Abdel-Wahab
                    (Croyance)
                  </li>
                  <li>
                    Les six fondements de Cheikh Mohamed Ibn Abdel-Wahab
                    (Croyance)
                  </li>
                  <li>Les fondements de la Sunnah de l'imam Ahmed</li>
                </ul>{" "}
              </Typography>
              <br />
              <Typography variant="body1">
                En terminant ce niveau, l'élève aura une base solide en arabe
                lui permettant de s'exprimer, de comprendre ses différents
                interlocuteurs et de faire bien évidemment ses premiers pas dans
                l'étude de la science auprès des savants.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default SchoolProgram;
