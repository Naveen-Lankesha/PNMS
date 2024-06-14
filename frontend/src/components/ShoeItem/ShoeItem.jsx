import { Paper, Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { StoreContext } from "../../context/StoreContext";

//size
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ShoeItem = ({ id, name, price, catergory, description, image }) => {
  const { size, handleChange, cartItems, addToCart, removeFromCart } =
    useContext(StoreContext);

  return (
    <Paper sx={{ minWidth: 200 }}>
      <Box>
        <img src={image} alt=" " style={{ width: "100%", minheight: "200" }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {!cartItems[id] ? (
            <AddCircleOutlineOutlinedIcon onClick={() => addToCart(id)} />
          ) : (
            <Box sx={{ display: "flex" }}>
              <RemoveCircleOutlineRoundedIcon
                onClick={() => removeFromCart(id)}
                style={{ color: "red" }}
              />
              <Typography sx={{ pl: 1, pr: 1 }}>{cartItems[id]}</Typography>
              <AddCircleOutlineOutlinedIcon
                onClick={() => addToCart(id)}
                style={{ color: "green" }}
              />
            </Box>
          )}
        </Box>
        {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
          <FormControl sx={{ mt: 1, minWidth: 120 }} size="small">
            <InputLabel id=" demo-select-small-label">Size</InputLabel>
            <Select
              labelId=" demo-select-small-label"
              id="demo-select-small"
              value={size[id] || ""}
              onChange={(event) => handleChange(id, event)}
              autoWidth
              label="Size">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
            </Select>
          </FormControl>
        </Box> */}
      </Box>
      <Box sx={{ p: 2 }}>
        <h3>{name}</h3>
        <p>{catergory}</p>
        <p>{description}</p>
        <Typography variant="h6" sx={{ color: "#FD7401" }}>
          Rs.{price}.00
        </Typography>
      </Box>
    </Paper>
  );
};

export default ShoeItem;
