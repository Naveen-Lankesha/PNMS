import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline, Dialog } from "@mui/material";

import Navbar from "./components/navbar/Navbar";
import { Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import PlantCare from "./pages/Plantcare/PlantCare";
import PlantRecipes from "./pages/PlantRecipes/PlantRecipes";
import Login from "./pages/login";
import Logout from "./pages/logout";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#289040",
    },
    secondary: {
      main: "#FCA054",
    },
  },
  typography: {
    fontFamily: "Public Sans, sans-serif",
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the user is authenticated on app load
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsAuthenticated(false);  // User is not authenticated
      navigate('/');  // Navigate to login page
    } else {
      setIsAuthenticated(true);   // User is authenticated
    }
  }, [navigate]);

  // Render login page if not authenticated
  if (!isAuthenticated) {
    return <Login />;  // Render the login page directly if not authenticated
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Dialog open={showLogin} onClose={() => setShowLogin(false)}>
        <LoginPopUp setShowLogin={setShowLogin} />
      </Dialog>*/}
      {/*<Navbar /> */}
      {/* Conditionally render Navbar on all pages except the login page */}
      {location.pathname !== '/' && <Navbar />} 
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/inventory-summary" element={<Cart />} />
          <Route path="/plant-care" element={<PlantCare />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/Plant-recipes" element={<PlantRecipes />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

