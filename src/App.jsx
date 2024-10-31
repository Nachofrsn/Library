import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import ExplorePage from "./pages/ExplorePage";
import ReviewsPage from "./pages/ReviewsPage";
import ProfilePage from "./pages/ProfilePage";
import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./index.css";

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Login" element={<RegisterPage type="login"/>} />
          <Route path="Register" element={<RegisterPage type="register"/>} />
          <Route path="Explore" element={<ExplorePage />} />
          <Route path="Explore/Profile" element={<ProfilePage />} />
          <Route path="Explore/Reviews" element={<ReviewsPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
