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
import { Link } from "react-router-dom";
import { APP_PATH } from "../constant";

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Adresse email invalide")
    .required("L'email requis"),
  password: Yup.string().required("Invalide mot de passe"),
});

const Login: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log("Form Data:", values);
    // API call
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Typography component="h1" variant="h5" align="center">
          Connectez vous
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, values }) => (
            <Form>
              <Box sx={{ mt: 2 }}>
                <TextField
                  label="Adresse email"
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

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Se connecter
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        <Typography align="center" variant="body2" sx={{ mt: 2 }}>
          Vous n'avez pas de compte ?{" "}
          <Link to={APP_PATH.REGISTRATION}>Créer en un ici.</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
