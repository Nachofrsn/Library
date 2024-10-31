import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Container
        maxWidth="false"
        sx={{
          m: 0,
          p: 0,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Container
          maxWidth="false"
          sx={{
            height: "5vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: { xs: "center", md: "flex-end" },
            margin: 0,
            alignItems: "center",
            p: 4,
          }}
        >
          <Box sx={{ display: "flex", m: 2 }}>
            <Button variant="contained" color="primary" component={Link} to="register">
              Registrarse
            </Button>
            <Button variant="outlined" color="primary" sx={{ marginLeft: 1 }} component={Link} to="login">
              Iniciar sesión
            </Button>
          </Box>
        </Container>
        <Container
          maxWidth="false"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            height: "73vh",
            width: "100vw",
            margin: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "60%",
              marginLeft: 6,
              marginRight: 2,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                marginBottom: 2,
                fontSize: {
                  xl: "90px",
                  lg: "90px",
                  md: "90px",
                  sm: "60px",
                  xs: "60px",
                },
              }}
            >
              Book Nest
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  xl: "40px",
                  lg: "40px",
                  md: "40px",
                  sm: "30px",
                  xs: "30px",
                },
              }}
            >
              Descubre tu próximo libro favorito, conecta con otros lectores y
              explora mundos más allá de las páginas
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              width: "40%",
            }}
          >
            <img
              src="landing-page-img.png"
              alt="landing-page-img-books"
              style={{ width: "80%", height: "80%" }}
            />
          </Box>
        </Container>
        <Container
          maxWidth="false"
          sx={{
            height: "20vh",
            margin: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="Explore"
            sx={{
              marginBottom: 7,
              width: {
                xl: "400px",
                lg: "400px",
                md: "400px",
                sm: "200px",
                xs: "200px",
              },
              h: {
                xl: "400px",
                lg: "400px",
                md: "400px",
                sm: "200px",
                xs: "200px",
              },
              p: 4,
              fontSize: {
                xl: "35px",
                lg: "35px",
                md: "35px",
                sm: "20px",
                xs: "20px",
              },

              color: "black",
              borderRadius: 20,
            }}
          >
            Explorar
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default HomePage;
