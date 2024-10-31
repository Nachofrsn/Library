import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import {
  CardActions,
  CardMedia,
  TextField,
  MenuItem,
  Select,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function BookFinder() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  
  const items = [
    {
      id: 1,
      title: "Mountain Landscape",
      category: "Nature",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "City Skyline",
      category: "Urban",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Beach Sunset",
      category: "Nature",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Modern Architecture",
      category: "Urban",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Forest Trail",
      category: "Nature",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Street Art",
      category: "Urban",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      (filter === "All" || item.category === filter) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
      <Box>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: "1px solid #e0e0e0" }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" component="div">
              Encontrar libros
            </Typography>
            <Box>
              <Button color="inherit">Explorar</Button>
              <Button color="inherit" component={Link} to="Profile">Cuenta</Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Box sx={{ padding: 3, textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            libros populares
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {Array.from({ length: 4 }).map((_, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Card
                  variant="outlined"
                  sx={{ borderRadius: "10px", padding: 2 }}
                >
                  <CardContent sx={{ height: 100, backgroundColor: "#f5f5f5" }}>
                    <Box
                      sx={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          backgroundColor: "#ddd",
                          borderRadius: "10px",
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "24px",
            flexWrap: "wrap",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            variant="outlined"
            displayEmpty
            fullWidth
          >
            <MenuItem value="All">All Categories</MenuItem>
            <MenuItem value="Nature">Nature</MenuItem>
            <MenuItem value="Urban">Urban</MenuItem>
          </Select>
        </div>

        <div
          style={{
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          }}
        >
          {filteredItems.map((item) => (
            <Card key={item.id}>
              <CardMedia
                component="img"
                height="200"
                image={item.imageUrl}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
              </CardContent>
              <CardActions>
                <Button fullWidth variant="outlined" component={Link} to="Reviews">
                  View Details
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
