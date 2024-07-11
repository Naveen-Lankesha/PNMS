import React from "react";
import Header from "../../components/header/Header";
import { Box } from "@mui/material";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import { useState } from "react";
import InventoryDisplay from "../../components/InventoryDisplay/InventoryDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div id="home">
      <Box>
        <Header />
<<<<<<< HEAD
        {/* <ExploreMenu category={category} setCategory={setCategory} /> */}
=======
        <ExploreMenu category={category} setCategory={setCategory} />
>>>>>>> origin/mayumi
      </Box>
      <Box sx={{ pr: 8, pl: 8 }}>
        <InventoryDisplay category={category} />
      </Box>
    </div>
  );
};

export default Home;
