import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import localImage from "./../../assets/frontend_assets/background.png";
import { veg_list } from "../../assets/frontend_assets/assets";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import BatchCard from "../../components/BatchCard/BatchCard";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
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
  const [date, setDate] = useState(new Date());
  const [notification, setNotification] = useState({
    open: false,
    message: "",
  });
  const expandedCardsRef = useRef({});

  const handleMinimizedCardClick = (batchID) => {
    const element = expandedCardsRef.current[batchID];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  // Custom hook for auto-refresh
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
        saveScrollPosition();
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
        restoreScrollPosition();
      };

      fetchData();
      const id = setInterval(fetchData, interval);

      return () => clearInterval(id);
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
      moistureLevel:
        moistureLevel !== null && moistureLevel !== undefined
          ? `${moistureLevel}%`
          : "Sensor not connected!",
      startDate: "Date",
      ageOfBatch: "Batch start date not selected!",
      pottingDate: "No type selected",
      pottingCompleted: false, // Default value for potting status
      fertilizingCompleted: false, // Default value for fertilizing status
      pesticidingCompleted: false, // Default value for pesticiding status
      nextFertilizationDate: "No type selected",
      nextPesticideApplicationDate: "No type selected",
      estimatedSaleDate: "No type selected",
    };

    setBatchCards([{ ...newBatchCard, isEditing: true }, ...batchCards]); // Add new card at the beginning
    setNextBatchID(nextBatchID + 1);
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

  const MinimizedBatchCard = ({ batchID, type, quantity }) => {
    const selectedItem = veg_list.find((item) => item.name === type);
    const imageUrl = selectedItem
      ? selectedItem.image
      : "/placeholder-image.jpg";

    return (
      <Card
        style={{
          margin: "10px",
          width: "200px",
          borderRadius: "20px",
          border: "solid",
          borderColor: "#54785c",
        }}
      >
        <CardActionArea onClick={() => handleMinimizedCardClick(batchID)}>
          <CardContent>
            <div style={{ marginBottom: "16px" }}>
              <strong style={{ marginRight: "11px", fontSize: "13px" }}>
                Batch ID :
              </strong>
              {batchID}
            </div>
            <div style={{ marginBottom: "16px" }}>
              <strong style={{ marginRight: "11px", fontSize: "13px" }}>
                Type :
              </strong>
              {type}
            </div>
            <div style={{ marginBottom: "16px" }}>
              <strong style={{ marginRight: "11px", fontSize: "13px" }}>
                Quantity:
              </strong>
              {quantity}
            </div>

            <img
              src={imageUrl}
              alt={type}
              style={{
                height: "150px",
                objectFit: "cover",
              }}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };
  return (
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
              marginBottom: "100px",
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

        {/* Minimized batch cards */}
        <div
          style={{
            marginTop: "100px",
            display: "flex",
            flexWrap: "wrap",
            marginBottom: "30px",
            justifyContent: "center",
          }}
        >
          {batchCards.map((card) => (
            <MinimizedBatchCard
              key={card.batchID}
              batchID={card.batchID}
              type={card.type}
              quantity={card.quantity}
            />
          ))}
        </div>

        {/* Expanded batch cards */}
        <div
          style={{
            display: "flex", // Flexbox layout for side-by-side columns
            justifyContent: "space-between", // Space between the columns
            width: "100%",
          }}
        >
          {/* Left Column: Expanded Batch List */}
          <div
            style={{
              flex: 2,
              marginBottom: "30px",
            }}
          >
            {batchCards.map((card) => (
              <div
                key={card.batchID}
                ref={(el) => (expandedCardsRef.current[card.batchID] = el)}
                style={{
                  marginBottom: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <BatchCard
                  {...card}
                  onEdit={() => handleEditCard(card.batchID)}
                  onDelete={() => handleDeleteBatchCard(card.batchID)}
                />
              </div>
            ))}
          </div>

          {/* Right Column: Upcoming Events */}
          <div
            style={{
              flex: 0.8,
              //padding: "20px",
              borderRadius: "20px",
              height: "400px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              marginLeft: "20px",
              backgroundColor: "#c9f2d3",
            }}
          >
            <div style={{ marginBottom: "16px" }}>
              <strong
                style={{
                  marginRight: "11px",
                  fontSize: "20px",
                  color: "#289040",
                }}
              >
                CALENDER
              </strong>
            </div>
            <Calendar onChange={setDate} value={date} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCare;
