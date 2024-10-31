import { Button, Card, CardActionArea, CardMedia, Tab, Tabs, Avatar, Box, Typography } from "@mui/material";
import { Book, Person as User } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Component() {
  const [tabValue, setTabValue] = useState("reading");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "800px", mx: "auto", p: 4 }}>
      <Box component="header" sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Button variant="text" size="large" component={Link} to="/">
          explorar
        </Button>
        <Button variant="outlined">cuenta</Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
        <Avatar
          alt="Profile photo"
          src="/placeholder.svg"
          sx={{ width: 96, height: 96, mb: 2 }}
        />
        <Typography variant="h6">username</Typography>
        <Button variant="outlined" size="small" startIcon={<User />}>
          editar perfil
        </Button>
      </Box>

      <Tabs
        value={tabValue}
        onChange={handleChange}
        centered
        sx={{ mb: 4 }}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="leído" value="read" />
        <Tab label="quiero leer" value="want" />
        <Tab label="leyendo" value="reading" />
      </Tabs>

      {["read", "want", "reading"].map((tab) => (
        <Box
          key={tab}
          role="tabpanel"
          hidden={tabValue !== tab}
          sx={{ display: tabValue === tab ? "grid" : "none", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: 2 }}
        >
          {[...Array(6)].map((_, i) => (
            <Card key={i} sx={{ position: "relative" }}>
              <CardActionArea sx={{ aspectRatio: "2 / 3" }}>
                <CardMedia
                  component="img"
                  image="/placeholder.svg"
                  alt={`Book cover ${i + 1}`}
                  sx={{ borderRadius: 1 }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0, 0, 0, 0.6)",
                    opacity: 0,
                    transition: "opacity 0.3s",
                    "&:hover": { opacity: 1 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 1,
                  }}
                >
                  <Book sx={{ fontSize: 32, color: "white" }} />
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      ))}
    </Box>
  );
}