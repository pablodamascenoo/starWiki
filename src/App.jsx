import "./styles/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/index.jsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./assets/themes/index.js";
import HomePage from "./pages/HomePage/index.jsx";
import PersonPage from "./pages/PersonPage/index.jsx";
import StarshipPage from "./pages/StarshipPage/index.jsx";
import DetailStarshipPage from "./pages/DetailStarshipPage/index.jsx";
import { useState } from "react";
import UserContext from "./contexts/UserContext.js";
import RegisterPage from "./pages/RegisterPage/index.jsx";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const value = { token, setToken };

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-in" element={<LoginPage />} />
            <Route path="/sign-up" element={<RegisterPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/person" element={<PersonPage />} />
            <Route path="/starships" element={<StarshipPage />} />
            <Route path="/starships/:id" element={<DetailStarshipPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
