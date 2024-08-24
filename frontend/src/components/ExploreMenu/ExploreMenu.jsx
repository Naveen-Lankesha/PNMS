<<<<<<< HEAD
import React from "react";
import { Box, Card, Grid, Paper, Stack, Typography } from "@mui/material";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
=======
import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import { menu_list } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

import AddItems from "../AddItems/AddItems";

const ExploreMenu = ({ category, setCategory }) => {
  const [open, setOpen] = useState(false);

>>>>>>> origin/mayumi
  const handleBrandClick = () => {
    const menuElement = document.getElementById("display");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

<<<<<<< HEAD
  return (
    <div id="menu">
      <Box sx={{ p: 8, m: 8 }}>
=======
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewItem({
      name: "",
      description: "",
      price: "",
    });
  };

  return (
    <div id="menu">
      <Box sx={{ p: 8 }}>
>>>>>>> origin/mayumi
        <Typography
          variant="h4"
          sx={{
            fontSize: { md: 40, lg: 50 },
<<<<<<< HEAD
            color: "white",
            textAlign: "center",
            fontWeight: 600,
          }}>
          Explore Our Brands
=======
            textAlign: "center",
            fontWeight: 600,
          }}>
          Our Inventory
>>>>>>> origin/mayumi
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: { sm: 16, md: 20, lg: 24 },
            mt: 2,
<<<<<<< HEAD
            mb: 6,
          }}>
          Discover excellence in diversity: Choose from an array of top brands
          for every stride.
        </Typography>
=======
            mb: 2,
          }}>
          Inventory Category
        </Typography>
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Box>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleClickOpen}>
              Add New Inventory Item
            </Button>
          </Box>
          <Box>
            <Link to="/inventory-summary">
              <Button>Show Inventory Summary</Button>
            </Link>
          </Box>
        </Stack>
        <hr style={{ border: "2px solid green" }} />
>>>>>>> origin/mayumi
        <div>
          <Grid container spacing={4}>
            {menu_list.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
<<<<<<< HEAD
                  md={6}
                  lg={3}
=======
                  md={4}
                  lg={4}
>>>>>>> origin/mayumi
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 4,
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/mayumi
                    onClick={() => {
                      handleBrandClick();
                      setCategory((prev) =>
                        prev === item.menu_name ? "All" : item.menu_name
                      );
                    }}
                  >
                    <img
                      style={{ maxHeight: 120 }}
                      src={item.menu_image}
                      alt=" "
                    />
                    <Typography>{item.menu_name}</Typography>
                  </Stack>
>>>>>>> origin/mayumi
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Box>
<<<<<<< HEAD
=======

      <Dialog fullScreen open={open} onClose={handleClose}>
        <DialogTitle>Add New Inventory Item</DialogTitle>
        <DialogContent>
          <Card
            sx={{
              borderRadius: "20px",
              margin: 3,
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              minHeight: "340px", // Ensure minimum height for visibility
            }}>
            <CardContent>
              <AddItems />
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
>>>>>>> origin/mayumi
    </div>
  );
};

export default ExploreMenu;
