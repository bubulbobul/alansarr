import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import { ErrorMessage, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const ContactPage = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (values: any, { resetForm }: any) => {
    console.log("Form Submitted: ", values);
    setFormValues(values);
    resetForm();
  };
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
                Envoyez-nous un message
              </Typography>
              <br></br>
              <Formik
                initialValues={formValues} // Use local state for initial values
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, handleChange, isSubmitting }) => (
                  <Form>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                        width: "100%",
                      }}
                    >
                      <TextField
                        name="name"
                        label="Nom"
                        fullWidth
                        variant="outlined"
                        value={values.name}
                        onChange={handleChange}
                        helperText={
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="error-message"
                          />
                        }
                      />

                      <TextField
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={values.email}
                        onChange={handleChange}
                        helperText={
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error-message"
                          />
                        }
                      />

                      <TextField
                        name="message"
                        label="Message"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        value={values.message}
                        onChange={handleChange}
                        helperText={
                          <ErrorMessage
                            name="message"
                            component="div"
                            className="error-message"
                          />
                        }
                      />

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        sx={{ width: "100%", marginTop: "10px" }}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default ContactPage;
