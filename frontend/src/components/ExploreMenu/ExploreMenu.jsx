import React from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { menu_list } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const ExploreMenu = ({ category, setCategory }) => {
  const handleBrandClick = () => {
    const menuElement = document.getElementById("display");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="menu">
      <Box sx={{ p: 8 }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { md: 40, lg: 50 },
            textAlign: "center",
            fontWeight: 600,
          }}>
          Our Inventory
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: { sm: 16, md: 20, lg: 24 },
            mt: 2,
            mb: 2,
          }}>
          Inventory Category
        </Typography>
        <Stack display={"flex"} flexDirection={"row-reverse"}>
          <Box>
            <Link to="/inventory-summary">
              <Button>Show Inventory summary</Button>
            </Link>
          </Box>
        </Stack>
        <hr style={{ border: "2px solid green" }} />
        <div>
          <Grid container spacing={4}>
            {menu_list.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={4}
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 4,
                    "&:hover": {
                      cursor: "pointer",
                    },
                    transform:
                      category === item.menu_name ? "scale(1.3)" : "scale(1)",
                    transition: "transform 0.3s ease-in-out",
                  }}>
                  <Stack
                    display={"flex"}
                    direction={"column"}
                    alignItems="center"
                    onClick={() => {
                      handleBrandClick();
                      setCategory((prev) =>
                        prev === item.menu_name ? "All" : item.menu_name
                      );
                    }}>
                    <img
                      style={{ maxHeight: 120 }}
                      src={item.menu_image}
                      alt=" "
                    />
                    <Typography>{item.menu_name}</Typography>
                  </Stack>
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
