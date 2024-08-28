import React, { useState, useEffect } from "react";
import axios from "axios";
import localImage from "./../../assets/frontend_assets/background.png";
import BatchCard from "../../components/BatchCard/BatchCard";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

const PlantCare = () => {
  const [batchCards, setBatchCards] = useState([]);
  const [nextBatchID, setNextBatchID] = useState(1);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null); // State to handle delete confirmation dialog
  const [moistureLevel, setMoistureLevel] = useState(null);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
  }); // State for notifications

  //fetching batches from database
  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/batch/list");
        if (response.data.success) {
          setBatchCards(response.data.data); // Set the fetched batches to state
          const highestBatchID = Math.max(
            ...response.data.data.map((batch) => parseInt(batch.batchID, 10)),
            0
          );
          setNextBatchID(highestBatchID + 1); // Update nextBatchID based on the highest batchID
        }
      } catch (error) {
        console.error("Error fetching batch list:", error);
      }
    };
  
    fetchBatches();
  }, []); // Empty dependency array means this effect runs once on mount

  //useEffect hook to fetch moisture level every 10 seconds
  useEffect(() => {
    const ws = new WebSocket("ws://192.168.230.206/ws"); // Establish WebSocket connection

    ws.onopen = () => {
      console.log("Connected to WebSocket");
      ws.send("getMoisture"); // Initial request for moisture level
    };

    ws.onmessage = (event) => {
      console.log("WebSocket message received:", event.data);
      if (!isNaN(event.data)) {
        setMoistureLevel(parseInt(event.data, 10)); // Update moisture level state
        console.log(event.data);
      } else {
        setNotification({ open: true, message: event.data }); // Show notification
        console.log(event.data);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    const fetchMoistureLevel = async () => {
      try {
        const response = await fetch("http://192.168.43.189/moisture");
        const data = await response.text();
        setMoistureLevel(parseInt(data, 10)); // Convert the string response to an integer
      } catch (error) {
        console.error("Error fetching moisture level:", error);
      }
    };

    fetchMoistureLevel(); // Initial fetch
    const interval = setInterval(fetchMoistureLevel, 10000); // Fetch every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Function to add a new batch card
  const handleAddBatchCard = () => {
    const newBatchCard = {
      batchID: `00${nextBatchID}`, // Generate unique batchID
      type: "select type",
      stage: "select stage",
      quantity: "00",
      moistureLevel: moistureLevel || 600,
      pestDate: "Date"
    };

    setBatchCards([{ ...newBatchCard, isEditing: true }, ...batchCards]); // Add new card at the beginning of the array
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

  const handleCloseNotification = () => {
    setNotification({ open: false, message: "" }); // Close notification
  };
  const handleEditCard = (batchID) => {
    setBatchCards(
      batchCards.map((card) =>
        card.batchID === batchID
          ? { ...card, isEditing: !card.isEditing }
          : card
      )
    );
  };
  return (
    <div>
      <div
        style={{
          position: "relative", // Position relative for the container
          //width: "100vw",
          minHeight: "100vh",
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${localImage})`,
          backgroundSize: "auto", // Default size to allow tiling
          backgroundRepeat: "repeat",
          backgroundPosition: "top left",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Add Batch Card button */}
        <div
          className="Content"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            <Button
              variant="contained"
              onClick={handleAddBatchCard}
              style={{
                backgroundColor: "#289040",
                position: "absolute",
                top: "10px",
                right: "20px",
                zIndex: 9999,
              }}
            >
              <AddIcon /> Add a New Batch
            </Button>
          </div>

          {/* Delete confirmation dialog */}
          <Dialog open={!!deleteConfirmation} onClose={cancelDelete}>
            <DialogTitle>Delete Batch</DialogTitle>
            <DialogContent>
              <p>Are you sure you want to delete this batch?</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={confirmDelete}>Yes</Button>
              <Button onClick={cancelDelete}>No</Button>
            </DialogActions>
          </Dialog>

          {/* Notification snackbar */}
          <Snackbar
            open={notification.open}
            message={notification.message}
            autoHideDuration={60000}
            onClose={handleCloseNotification}
          />

          {/* Render existing batch cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              marginTop: "50px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            {batchCards.map((card) => (
              <BatchCard
                key={card.batchID}
                {...card}
                onEdit={() => handleEditCard(card.batchID)}
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
