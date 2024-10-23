import React, { useState } from "react";
import Navbar from "./../components/Navbar";
import Itemcard from "../components/Itemcard";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

const Inventory = () => {
  const [Itemcards, setItemCards] = useState([]);
  const [nextItemID, setNextItemID] = useState(1);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  const handleAddItemCard = () => {
    const newItemCard = {
      ItemID: `00${nextItemID}`,
      ItemName: "Item Name",
      Quantity: "Quantity",
    };
    setItemCards([newItemCard, ...Itemcards]);
    setNextItemID(nextItemID + 1);
  };

  const handleDeleteItemcard = () => (ItemIdToDelete) => {
    setDeleteConfirmation({ ItemIdToDelete });
  };

  const confirmDelete = () => {
    const ItemIdToDelete = deleteConfirmation.ItemID;
    setItemCards(Itemcards.filter((card) => card.ItemID != ItemIdToDelete));
  };

  const cancelDelete = () => {
    setDeleteConfirmation(null);
  };

  return (
    <div>
      <Navbar />
      <div
        stye={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}
      >
        <div
          className="Contnet"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div>
            <Button
              variant="contained"
              onClick={handleAddItemCard}
              style={{
                backgroundColor: "#289040",
                position: "absolute",
                top: "10px", // Adjust as needed
                right: "20px", // Adjust as needed
                zIndex: 9999, // Ensure button appears on top
              }}
            >
              <AddIcon />
            </Button>
          </div>
          <Dialog open={!!deleteConfirmation} onClose={cancelDelete}>
            <DialogTitle>Delete Batch Card</DialogTitle>
            <DialogContent>
              <p>Are you sure you want to delete this item?</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={confirmDelete}>Yes</Button>
              <Button onClick={cancelDelete}>No</Button>
            </DialogActions>
          </Dialog>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",

              marginTop: "50px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            {Itemcards.map((card) => (
              <Itemcard
                key={card.ItemID}
                {...card}
                onDelete={() => handleDeleteItemcard(card.ItemID)}
              ></Itemcard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
