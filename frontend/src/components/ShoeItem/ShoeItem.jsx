import {
  Paper,
  Box,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useContext, useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { StoreContext } from "../../context/StoreContext";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
const url2 = import.meta.env.VITE_API_URL;

const ShoeItem = ({ id, name, price, catergory, description, image }) => {
  const { size, handleChange, cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  // State for dialog
  const [open, setOpen] = useState(false);

  // Function to handle delete action
  const handleDelete = async () => {
    try {
      const response = await axios.post(`${url}/api/item/remove`, {
        id,
      });
    } catch (error) {
      console.error("Error removing item:", error);
      alert("An error occurred while removing the item.");
    } finally {
      setOpen(false); // Close the dialog
    }
  };

  // Open dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper sx={{ minWidth: 200 }}>
      <Box>
        <img
          src={url + "/images/" + image}
          alt=" "
          style={{ width: "100%", minheight: "200" }}
        />
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
      </Box>
      <Box sx={{ p: 2 }}>
        <h3>{name}</h3>
        <p>{catergory}</p>
        <p>{description}</p>
        <Typography
          variant="h6"
          sx={{ color: "#FD7401", display: "flex", alignItems: "center" }}
        >
          Rs.{price}.00
          <IconButton
            onClick={handleClickOpen} // Open the dialog instead of deleting directly
            color="error"
            sx={{ ml: 10 }} // Adds margin to the left of the icon
          >
            <DeleteIcon />
          </IconButton>
        </Typography>
      </Box>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this item? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            sx={{ fontSize: "0.875rem" }}
          >
            {" "}
            {/* Reduce font size */}
            Cancel
          </Button>
          <Button
            onClick={async () => {
              await handleDelete();
              handleClose(); // Close dialog after deletion
            }}
            color="error"
            sx={{ fontSize: "0.875rem" }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default ShoeItem;
