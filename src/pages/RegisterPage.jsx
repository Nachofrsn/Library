import {
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Box,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "350px",
  height: "600px", // Adjusted height for additional fields
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const Form = ({ type }) => {
  if (type === "login") {
    return (
      <Container
        maxWidth="false"
        sx={{
          display: "flex",
          m: 0,
          justifyContent: "center",
          alignContent: "center",
          width: "100vw",
          height: "100vh",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        <StyledPaper sx={{ display: "flex" }}>
          <Typography variant="h4" component="p" gutterBottom>
            Iniciar Sesion
          </Typography>
          <Box
            component="form"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mb: 2,
            }}
          >
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
            />
            <TextField
              type="password"
              label="Contraseña"
              variant="outlined"
              fullWidth
            />
            <Link href="#" variant="body2" align="right">
              ¿Olvidaste tu contraseña?
            </Link>
            <Button variant="contained" color="primary" fullWidth>
              Iniciar Sesion
            </Button>
          </Box>
          <Typography variant="body2" gutterBottom>
            ¿No tienes una cuenta? <Link href="register">Registrarse</Link>
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2,
            }}
          >
            <Button variant="outlined" fullWidth>
              Iniciar con GitHub
            </Button>
            <Button variant="outlined" fullWidth>
              Iniciar con Google
            </Button>
          </Box>
        </StyledPaper>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="false"
      sx={{
        display: "flex",
        m: 0,
        justifyContent: "center",
        alignContent: "center",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      <StyledPaper sx={{ display: "flex" }}>
        <Typography variant="h4" component="p" gutterBottom>
          Registrarse
        </Typography>
        <Box
          component="form"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mb: 2,
          }}
        >
          <TextField type="email" label="Email" variant="outlined" fullWidth />
          <TextField
            type="password"
            label="Contraseña"
            variant="outlined"
            fullWidth
          />
          <TextField
            type="password"
            label="Confirmar Contraseña"
            variant="outlined"
            fullWidth
          />
          <Button variant="contained" color="primary" fullWidth>
            Registrarse
          </Button>
        </Box>
        <Typography variant="body2" gutterBottom>
          ¿Ya tienes una cuenta? <Link href="login">Iniciar Sesion</Link>
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
          }}
        >
          <Button variant="outlined" fullWidth>
            Registrarse con GitHub
          </Button>
          <Button variant="outlined" fullWidth>
            Registrarse con Google
          </Button>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default Form;
