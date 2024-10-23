import * as React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Typography, Stack, useMediaQuery, useTheme, Modal } from "@mui/material";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import LoginIcon from "@mui/icons-material/Login";
import localImage from "./../../assets/frontend_assets/newlogo.png";

export default function ButtonAppBar({ setShowLogin }) {
  const [activeButton, setActiveButton] = React.useState("Home");
  const [openModal, setOpenModal] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    const menuElement = document.getElementById("home");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleplantRecipesClick = () => {
    const menuElement = document.getElementById("plantRecipes");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const handleContactClick = () => {
  //   const menuElement = document.getElementById("footer");
  //   if (menuElement) {
  //     menuElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const handleLogout = () => {
    // Perform logout actions
    localStorage.removeItem("token");
    setToken(""); // Update token in context
    navigate("/login"); // Navigate to the login page
  };

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={1}
        sx={{
          background: "white",
          px: { xs: 1, sm: 2 },
          py: { xs: 1, sm: 2 },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 0,
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            component="div"
            sx={{ ml: { xs: 0, sm: 4 } }}
          >
            <img
              onClick={() => (window.location.href = "/home")}
              src={localImage}
              style={{
                maxHeight: isSmallScreen ? 30 : 80,
                maxWidth: "auto",
              }}
              alt="Logo"
            />
          </IconButton>
          <Stack
            direction={"row"}
            spacing={0}
            sx={{
              flexGrow: 1,
              justifyContent: isSmallScreen ? "flex-start" : "center",
              display: "flex",
            }}
          >
            <Link to="/home">
              <Button
                sx={{
                  fontSize: { xs: "0.6rem", sm: "1rem" },
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationThickness: "1px",
                  },
                  textDecoration:
                    activeButton === "Home" ? "underline" : "none",
                  textDecorationThickness:
                    activeButton === "Home" ? "3px" : "0",
                }}
                onClick={() => {
                  handleHomeClick();
                  setActiveButton("Home");
                }}
              >
                Home
              </Button>
            </Link>
            <Link to="/plant-care">
              <Button
                sx={{
                  fontSize: { xs: "0.6rem", sm: "1rem" },
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationThickness: "1px",
                  },
                  textDecoration:
                    activeButton === "Menu" ? "underline" : "none",
                  textDecorationThickness:
                    activeButton === "Menu" ? "3px" : "0",
                }}
                onClick={() => {
                  setActiveButton("Menu");
                }}
              >
                Plant Care
              </Button>
            </Link>
            <Link to="/plant-recipes">
              <Button
                sx={{
                  fontSize: { xs: "0.6rem", sm: "1rem" },
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationThickness: "1px",
                  },
                  textDecoration:
                    activeButton === "Plant Recipes" ? "underline" : "none",
                  textDecorationThickness:
                    activeButton === "Plant Recipes" ? "3px" : "0",
                }}
                onClick={() => {
                  setActiveButton("Plant Recipes");
                }}
              >
                Plant Recipes
              </Button>
            </Link>
          </Stack>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 5,
              fontSize: { xs: "0.6rem", sm: "1rem" },
              ml: { xs: 1, sm: 4 },
              display: { xs: "none", sm: "inline-flex" },
            }}
            onClick={() => setOpenModal(true)} // Open modal on click
            // component={Link}
            // to="/logout"
          >
            Logout
          </Button>
          <IconButton
            sx={{
              display: { xs: "inline-flex", sm: "none" },
              ml: 1,
            }}
            onClick={() => setShowLogin(true)}
          >
            <LoginIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Logout Confirmation Modal */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="logout-confirmation-modal"
        aria-describedby="confirm-logout-action"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="logout-confirmation-modal" variant="h6">
            Are you sure you want to log out?
          </Typography>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button onClick={handleLogout} variant="contained" color="primary">
              Yes
            </Button>
            <Button onClick={() => setOpenModal(false)} variant="outlined" color="secondary">
              No
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}