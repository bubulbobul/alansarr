import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Registration.css";
import { Link } from "react-router-dom";

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Le nom est requis"),
  email: Yup.string().email("Email invalide").required("L'email est requis"),
  password: Yup.string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractère")
    .required("Le mot de passe est requis"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Les mots de passe doivent être identique")
    .required("Confirmez votre mot de passe"),
});

const Registration: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log("Form Data:", values);
    // API call
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Typography component="h1" variant="h5" align="center">
          Créer un compte
        </Typography>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, values }) => (
            <Form>
              <Box sx={{ mt: 2 }}>
                <TextField
                  label="Nom"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />

                <TextField
                  label="Adresse Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />

                <TextField
                  label="Mot de passe"
                  type="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />

                <TextField
                  label="Confirmation du mot de passe"
                  type="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error-message"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Créer un compte
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        <Typography align="center" variant="body2" sx={{ mt: 2 }}>
          Vous avez déjà un compte ?{" "}
          <Link to="/alansarr/login">Connectez vous ici</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Registration;
