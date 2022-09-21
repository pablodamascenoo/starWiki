import "./styles/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/index.jsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./assets/themes/index.js";
import HomePage from "./pages/HomePage/index.jsx";
import PersonPage from "./pages/PersonPage/index.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/person" element={<PersonPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
