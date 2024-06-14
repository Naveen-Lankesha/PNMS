import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import ShoeItem from "../ShoeItem/ShoeItem";
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
      <Stack display={"flex"} flexDirection={"row-reverse"}>
        <Box>
          <Link to="/inventory-summary">
            <Button>Show Inventory summary</Button>
          </Link>
        </Box>
      </Stack>
      <hr style={{ border: "2px solid green" }} /> {/* Added solid line */}
      <br />
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
                lg={4}
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
                  catergory={item.category}
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
