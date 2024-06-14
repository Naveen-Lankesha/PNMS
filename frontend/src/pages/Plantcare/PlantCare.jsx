import React, { useState } from "react";
import localImage from "./../../assets/frontend_assets/background.png";
import BatchCard from "../../components/BatchCard/BatchCard";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

const PlantCare = () => {
  const [batchCards, setBatchCards] = useState([]);
  const [nextBatchID, setNextBatchID] = useState(1);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null); // State to handle delete confirmation dialog

  // Function to add a new batch card
  const handleAddBatchCard = () => {
    const newBatchCard = {
      batchID: `00${nextBatchID}`, // Generate unique batchID
      type: "Type",
      stage: "Ready to Sell",
      quantity: "Quantity",
      moistureLevel: 600,
      n: 100,
      p: 200,
      k: 300,
      pesticidesDate: "Date",
    };

    setBatchCards([newBatchCard, ...batchCards]); // Add new card at the beginning of the array
    setNextBatchID(nextBatchID + 1); // Increment the counter for next batchID
  };

  // Function to delete a batch card
  const handleDeleteBatchCard = (batchIDToDelete) => {
    setDeleteConfirmation({ batchID: batchIDToDelete });
  };

  // Function to confirm deletion
  const confirmDelete = () => {
    const batchIDToDelete = deleteConfirmation.batchID;
    setBatchCards(
      batchCards.filter((card) => card.batchID !== batchIDToDelete)
    );
    setDeleteConfirmation(null); // Close the confirmation dialog
  };

  // Function to cancel deletion
  const cancelDelete = () => {
    setDeleteConfirmation(null); // Close the confirmation dialog
  };

  return (
    <div>
      <div
        style={{
          position: "relative", // Position relative for the container
          width: "100vw",
          height: "100vh",
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${localImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}>
        {/* Add Batch Card button */}
        <div
          className="Content"
          style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <Button
              variant="contained"
              onClick={handleAddBatchCard}
              style={{
                backgroundColor: "#289040",
                position: "absolute",
                top: "10px", // Adjust as needed
                right: "20px", // Adjust as needed
                zIndex: 9999, // Ensure button appears on top
              }}>
              <AddIcon /> Add a New Batch
            </Button>
          </div>

          {/* Delete confirmation dialog */}
          <Dialog open={!!deleteConfirmation} onClose={cancelDelete}>
            <DialogTitle>Delete Batch Card</DialogTitle>
            <DialogContent>
              <p>Are you sure you want to delete this batch card?</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={confirmDelete}>Yes</Button>
              <Button onClick={cancelDelete}>No</Button>
            </DialogActions>
          </Dialog>

          {/* Render existing batch cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              marginTop: "50px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}>
            {batchCards.map((card) => (
              <BatchCard
                key={card.batchID}
                {...card}
                onDelete={() => handleDeleteBatchCard(card.batchID)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCare;
