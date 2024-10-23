import React, { useState } from "react";
import { Stack, Button, Box, Paper, Typography, Grid } from "@mui/material";
import { assets } from "../assets/frontend_assets/assets"; // Assuming you have the assets
import LoginPopUp from "../components/LoginPopUp/LoginPopUp";

const login = () => {
  const [showLogin, setShowLogin] = useState(false); // State to manage popup visibility

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {/* Background container */}
      <Paper
        elevation={0}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh", // Cover the entire viewport height
          backgroundImage: `url(${assets.background})`,
          backgroundSize: "cover", // Ensures the image covers the viewport
          backgroundPosition: "center", // Centers the image horizontally
          backgroundRepeat: "no-repeat", // Prevents repetition of the image
          zIndex: -1, // Place the background behind all other content
          opacity: 0.6, // Semi-transparent background
        }}
      />

      {/* Grid to divide the page into two blocks */}
      <Grid container sx={{ minHeight: "100vh", zIndex: 1 }}>
        {/* Left Block: Title */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white block
            p: 4,
          }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 30, sm: 44, md: 60, lg: 100 }, // Increased font size for larger screens
              fontWeight: "bold",
              color: "green",
              textAlign: "center",
            }}>
            Haritha Agro PNMS
          </Typography>
        </Grid>

        {/* Right Block: Login Popup */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white block
            p: 4,
          }}>
          <Box sx={{ width: "100%", maxWidth: 400 }}>
            {/* Render the login popup directly */}
            <LoginPopUp setShowLogin={setShowLogin} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default login;
