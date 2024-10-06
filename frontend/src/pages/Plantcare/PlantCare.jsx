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
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [moistureLevel, setMoistureLevel] = useState(null);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
  });

  // Local state to store edits
  //const [editingBatch, setEditingBatch] = useState({});

  // Define the custom hook useAutoRefresh
  const useAutoRefresh = (url, interval) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };

    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem("scrollPosition");
      if (savedPosition !== null) {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }
    };

    const fetchData = async () => {
      saveScrollPosition(); // Save the current scroll position
      try {
        const response = await axios.get(url);
        if (response.data.success) {
          setData(response.data);
        } else {
          setError(response.data.message || "Error fetching data");
        }
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
      restoreScrollPosition(); // Restore the scroll position after fetching data
    };

    fetchData(); // Fetch data immediately on mount
    const id = setInterval(fetchData, interval); // Set up auto-refresh

    return () => clearInterval(id); // Cleanup interval on component unmount
  }, [url, interval]);

  return { data, error };
};
  
  // Handle sensor data update
  useEffect(() => {
    if (moistureLevel) {
      console.log("Moisture Level Updated:", moistureLevel);
    }
  }, [moistureLevel]);

  // Fetch initial batch list
  // Fetching batches from the database
  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/batch/list"
        );
        if (response.data.success) {
          setBatchCards(response.data.data);
          const highestBatchID = Math.max(
            ...response.data.data.map((batch) => parseInt(batch.batchID, 10)),
            0
          );
          setNextBatchID(highestBatchID + 1);
        }
      } catch (error) {
        console.error("Error fetching batch list:", error);
      }
    };

    fetchBatches();
  }, []);

 // Use the custom hook
 const { data: sensorData, error } = useAutoRefresh(
  "http://192.168.230.207:4000/api/upload-sensor-data",
  5000
);

  // Function to add a new batch card
  const handleAddBatchCard = () => {
    const newBatchCard = {
      batchID: `00${nextBatchID}`,
      type: "Select Type",
      quantity: "00",
      moistureLevel: moistureLevel || 100,
      pestDate: "Date"
    };
      moistureLevel:
        moistureLevel !== null && moistureLevel !== undefined
          ? `${moistureLevel}%`
          : "Sensor not connected!",
      startDate: "Date",
      ageOfBatch: "Batch start date not selected!",
      pottingDate: "No type selected",
      nextFertilizationDate: "No type selected",
      nextPesticideApplicationDate: "No type selected",
      estimatedSaleDate: "No type selected",
    };

    // Save the new batch to the backend

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

    setDeleteConfirmation(null);
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
          position: "relative",
          minHeight: "100vh",
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${localImage})`,
          backgroundSize: "auto",
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
            autoHideDuration={6000}
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
                key={card.batchID || index}
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
