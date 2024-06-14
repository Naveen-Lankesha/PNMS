import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import ShoeItem from "../ShoeItem/ShoeItem";
import { Grid, Typography } from "@mui/material";

const InventoryDisplay = ({ category }) => {
  const { shoe_list } = useContext(StoreContext);

  return (
    <div id="display" style={{ margin: 0, padding: 0 }}>
      {/* <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
        Shoe Display
      </Typography> */}
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
