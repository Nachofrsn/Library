import { Menu as MenuIcon, Book, Star, Person } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  Drawer,
  Rating,
} from '@mui/material';
import React, { useState } from 'react';

export default function Component() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box maxWidth="lg" mx="auto">
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', borderBottom: '1px solid #e0e0e0' }}>
        <IconButton
          onClick={toggleDrawer(true)}
          edge="start"
          sx={{ display: { lg: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List sx={{ width: 250, padding: 2 }}>
            <ListItem button>
              <ListItemText primary="Explorar" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Cuenta" />
            </ListItem>
          </List>
        </Drawer>
        <Button sx={{ display: { xs: 'none', lg: 'inline-flex' } }}>Explorar</Button>
        <Button variant="outlined">Cuenta</Button>
      </header>

      <Grid container spacing={3} padding={3}>
        {/* Columna Izquierda */}
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', backgroundColor: '#f5f5f5' }}>
              <Book style={{ fontSize: 48, color: '#9e9e9e' }} />
            </CardContent>
          </Card>

          <Button variant="outlined" fullWidth onClick={handleMenuClick}>
            Estado
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Leído</MenuItem>
            <MenuItem onClick={handleMenuClose}>Quiero leer</MenuItem>
            <MenuItem onClick={handleMenuClose}>Leyendo</MenuItem>
          </Menu>
        </Grid>

        {/* Columna del Medio */}
        <Grid item xs={12} md={6} lg={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            Título del Libro
          </Typography>
          <Box display="flex" alignItems="center" gap={1} color="text.secondary">
            <Person fontSize="small" />
            <Typography>Nombre del Autor</Typography>
          </Box>
          <Typography variant="subtitle1" fontWeight="bold" mt={2}>
            Género
          </Typography>
          <Typography color="text.secondary">Ficción Contemporánea</Typography>
          <Typography variant="subtitle1" fontWeight="bold" mt={2}>
            Descripción
          </Typography>
          <Typography color="text.secondary">
            Una cautivadora historia que sigue a un joven protagonista en un viaje de autodescubrimiento a través de paisajes exóticos y encuentros transformadores. Este libro explora temas de identidad, amor y el poder de las conexiones humanas.
          </Typography>
        </Grid>

        {/* Columna Derecha */}
        <Grid item xs={12} md={6} lg={3}>
          <Box display="flex" alignItems="center">
            <Rating value={4} readOnly />
            <Typography color="text.secondary" ml={1}>
              (4.0)
            </Typography>
          </Box>

          <Card>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Reseña
              </Typography>
              <Typography color="text.secondary">
                Este libro me mantuvo enganchado desde la primera página hasta la última. La narrativa es fluida y los personajes están bien desarrollados. Altamente recomendado para los amantes de la ficción contemporánea.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
