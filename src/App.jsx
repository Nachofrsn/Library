import HomePage from "./pages/HomePage";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4C8B8F",
    },
    secondary: {
      main: "#8DB8A5",
    },
    background: {
      default: "#EDF9F7",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
