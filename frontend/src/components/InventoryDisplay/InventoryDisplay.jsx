import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import ShoeItem from "../ShoeItem/ShoeItem";
<<<<<<< HEAD
import { Grid, Typography } from "@mui/material";

const InventoryDisplay = ({ category }) => {
  const { shoe_list } = useContext(StoreContext);

  return (
    <div id="display" style={{ margin: 0, padding: 0 }}>
      {/* <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
        Shoe Display
      </Typography> */}
=======
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const InventoryDisplay = ({ category }) => {
  const { shoe_list, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div id="display" style={{ margin: 0, padding: 0 }}>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", mb: 2, fontWeight: 600 }}>
        Inventory Display
      </Typography>
      <hr style={{ border: "2px solid green" }} /> {/* Added solid line */}
      <br />
>>>>>>> origin/mayumi
      <div>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          {shoe_list
            .filter((item) => category === "All" || item.category === category)
            .map((item, index) => (
              <Grid
                item
                sm={12}
                md={6}
<<<<<<< HEAD
                lg={4}
=======
                lg={3}
>>>>>>> origin/mayumi
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  "&:hover": {
                    cursor: "pointer",
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
                key={index}>
                <ShoeItem
                  id={item._id}
                  name={item.name}
<<<<<<< HEAD
=======
                  catergory={item.category}
>>>>>>> origin/mayumi
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default InventoryDisplay;
