import React from "react";
import { Button } from "@mui/material";

const Modbutton = ({ value }) => {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#289040",
          "&:hover": { backgroundColor: "gray" },
        }}>
        {value}
      </Button>
    </div>
  );
};

export default Modbutton;
