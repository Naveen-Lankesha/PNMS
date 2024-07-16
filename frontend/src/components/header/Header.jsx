import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import LandImg from "../../assets/frontend_assets/LandingStock2.png";
import { assets } from "../../assets/frontend_assets/assets";

const Header = () => {
  const handleInventoryClick = () => {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Paper
      elevation={5}
      sx={{
        borderRadius: 8,

        p: 8,
        ml: 8,
        mr: 8,
        backgroundImage: `url(${assets.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "10px",
        //height: "80vh",
      }}>
      <Stack display={"flex"} direction={"column"}>
        <Stack flex={1}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 48, sm: 64, md: 80, lg: 96, xl: 112 },
              textAlign: "center",
              color: "green",
            }}>
            HARITHA AGRO PNMS
          </Typography>

          {/* <Typography
            variant="h6"
            sx={{
              pt: 4,
              pb: 4,
              textAlign: "justify",
              maxWidth: 780,
              fontWeight: { xs: 200, sm: 200, lg: 500 },
            }}>
            Explore our curated collection to find footwear that not only
            enhances your look but also elevates your confidence with every
            step. At CLOUD7, we believe that style isn't just about what you
            wear, but how you walk in it.
          </Typography> */}
        </Stack>
        <Box display={"flex"} flexDirection={"row-reverse"} flex={1}>
          <Button
            onClick={() => {
              handleInventoryClick();
            }}
            variant="contained"
            sx={{
              borderRadius: 5,
              fontSize: { xs: 8, sm: 12, md: 16, lg: 18 },
              fontWeight: { md: 500, lg: 500 },
              textAlign: "center",
              color: "white",
              maxWidth: 200,
            }}>
            View INVENTORY
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
};

export default Header;
