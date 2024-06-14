import React from "react";
import { Box, Card, Grid, Paper, Stack, Typography } from "@mui/material";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  const handleBrandClick = () => {
    const menuElement = document.getElementById("display");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="menu">
      <Box sx={{ p: 8, m: 8 }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { md: 40, lg: 50 },
            color: "white",
            textAlign: "center",
            fontWeight: 600,
          }}>
          Explore Our Brands
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: { sm: 16, md: 20, lg: 24 },
            mt: 2,
            mb: 6,
          }}>
          Discover excellence in diversity: Choose from an array of top brands
          for every stride.
        </Typography>
        <div>
          <Grid container spacing={4}>
            {menu_list.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={3}
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 4,
                    mb: 2,
                    "&:hover": {
                      cursor: "pointer",
                      transform: "scale(1.1)",
                      transition: "transform 0.3s ease-in-out",
                    },
                    transform:
                      category === item.menu_name ? "scale(1.5)" : "scale(1)",
                    transition: "transform 0.3s ease-in-out",
                  }}>
                  <div
                    onClick={() => {
                      handleBrandClick();
                      setCategory((prev) =>
                        prev === item.menu_name ? "All" : item.menu_name
                      );
                    }}>
                    <img
                      style={{ maxHeight: 80 }}
                      src={item.menu_image}
                      alt=" "
                    />
                    {/* <Typography>{item.menu_name}</Typography> */}
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Box>
    </div>
  );
};

export default ExploreMenu;
