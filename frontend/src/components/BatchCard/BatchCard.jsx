import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  TextField,
  CardActions,
  Button,
  Stack,
  Select,
  Box,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Alert,
  AlertTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { veg_list } from "../../assets/frontend_assets/assets";

const EditableCard = ({
  batchID,
  type,
  quantity,
  moistureLevel,
  startDate,
  ageOfBatch,
  onDelete,
  isEditing,
  onEdit,
}) => {
  const [editableType, setEditableType] = useState(type || null);
  const [editableQuantity, setEditableQuantity] = useState(quantity);
  const [editableDate, setEditableDate] = useState(startDate);
  const [dateOfPot, setDateOfPot] = useState(null);
  const [dateOfFertilize, setDateOfFertilize] = useState(null);
  const [dateOfPesticide, setDateOfPesticide] = useState(null);
  const [dateOfSell, setDateOfSell] = useState(null);
  const [pottingCompleted, setPottingCompleted] = useState(false);
  const [fertilizingCompleted, setFertilizingCompleted] = useState(false);
  const [pesticidingCompleted, setPesticidingCompleted] = useState(false);
  const [notification, setNotification] = useState({});
  const [plantData, setPlantData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/plant/list"
        );
        console.log("API Response:", response.data);

        if (response.data.success && Array.isArray(response.data.data)) {
          setPlantData(response.data.data);
        } else {
          console.error("Unexpected response data format:", response.data);
          setError(new Error("Unexpected response data format"));
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (plantData.length > 0 && editableType && editableDate) {
      const selectedPlant = plantData.find(
        (plant) => plant.type === editableType
      );
      if (selectedPlant) {
        calculateDate(
          selectedPlant.duration_to_pot,
          selectedPlant.duration_to_fertilize,
          selectedPlant.duration_to_pesticide,
          selectedPlant.duration_to_sell
        );
      }
      if (selectedPlant.moistureThresholds) {
        setMoistureThresholds(selectedPlant.moistureThresholds);
      }
    }
  }, [plantData, editableType, editableDate]);
  useEffect(() => {
    const fetchBatchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/batch/${batchID}`
        );
        const batchData = response.data;

        // Update the state with the fetched data
        if (batchData.success) {
          const batch = batchData.data;
          setPottingCompleted(batch.pottingCompleted || false);
          setFertilizingCompleted(batch.fertilizingCompleted || false);
          setPesticidingCompleted(batch.pesticidingCompleted || false);
        } else {
          setError(new Error("Failed to load batch data"));
        }
      } catch (err) {
        setError(err);
      }
    };

    if (batchID) {
      fetchBatchData();
    }
  }, [batchID]);

  const getMoistureNotification = (currentMoisture) => {
    if (currentMoisture <= moistureThresholds.critical) {
      return {
        message: `CRITICAL: Moisture level (${currentMoisture}) is extremely low!`,
        color: "red",
      };
    } else if (currentMoisture <= moistureThresholds.low) {
      return {
        message: `WARNING: Moisture level (${currentMoisture}) is low`,
        color: "orange",
      };
    }
    return null;
  };

  const calculateDate = (
    duration_to_pot,
    duration_to_fertilize,
    duration_to_pesticide,
    duration_to_sell
  ) => {
    const start = new Date(editableDate);
    if (isNaN(start.getTime())) {
      console.error("Invalid start date");
      return;
    }
    const durationPot = parseInt(duration_to_pot, 10) || 0;
    const durationFertilize = parseInt(duration_to_fertilize, 10) || 0;
    const durationPesticide = parseInt(duration_to_pesticide, 10) || 0;
    const durationSell = parseInt(duration_to_sell, 10) || 0;

    start.setDate(start.getDate() + durationPot);
    const pottingDate = start.toISOString().split("T")[0];
    setDateOfPot(pottingDate);

    start.setDate(start.getDate() + durationFertilize);
    const fertilizingDate = start.toISOString().split("T")[0];
    setDateOfFertilize(fertilizingDate);

    start.setDate(start.getDate() + durationPesticide);
    const pesticideDate = start.toISOString().split("T")[0];
    setDateOfPesticide(pesticideDate);

    start.setDate(start.getDate() + durationSell);
    const sellDate = start.toISOString().split("T")[0];
    setDateOfSell(sellDate);
  };

  const [moistureThresholds, setMoistureThresholds] = useState({
    low: 60, // Default low threshold
    critical: 50, // Default critical threshold
  });

  const calculateAge = (startDate) => {
    const today = new Date();
    const start = new Date(startDate);
    const diffInMs = today - start;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffInDays / 7);
    const days = diffInDays % 7;
    return { weeks, days };
  };
  const getNotificationForDate = (targetDate, label, isCompleted) => {
    if (isCompleted) return null;

    const today = new Date();
    const target = new Date(targetDate);

    const diffInMs = target - today;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (isNaN(target.getTime())) return null; // Check if the date is valid

    if (diffInDays === 0) {
      return { message: `${label} is today!`, color: "red" };
    } else if (diffInDays < 0) {
      return { message: `${label} has passed!`, color: "red" };
    } else if (diffInDays <= 5) {
      return { message: `${label} is in ${diffInDays} days`, color: "orange" };
    }
    return null;
  };
  const notifications = !isEditing
    ? [
        getMoistureNotification(moistureLevel),
        getNotificationForDate(dateOfPot, "Potting Date", pottingCompleted),
        getNotificationForDate(
          dateOfFertilize,
          "Next Fertilization Date",
          fertilizingCompleted
        ),
        getNotificationForDate(
          dateOfPesticide,
          "Next Pesticide Application Date",
          pesticidingCompleted
        ),
        // Sale date notification is always shown regardless of completion status
        getNotificationForDate(dateOfSell, "Estimated Sale Date", false),
      ].filter((notification) => notification !== null)
    : [];

  const renderTaskCheckbox = (name, date, isCompleted, setCompleted) => (
    <Box display="flex" alignItems="center" gap={2}>
      <div>
        <strong style={strongStyle}>{name}:</strong> {date}
      </div>
      <FormControlLabel
        control={
          <Checkbox
            name={name.toLowerCase().replace(/\s+/g, "")}
            checked={isCompleted}
            onChange={(e) => setCompleted(e.target.checked)} // Proper state update
            color="primary"
          />
        }
        label="Done"
      />
    </Box>
  );

  const handleEdit = () => {
    if (!editableDate) {
      setEditableDate(getCurrentDate());
    }
    onEdit();
  };
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-GB"); // Format as DD/MM/YYYY
  };

  const handleSave = () => {
    const { weeks, days } = calculateAge(editableDate);
    const updatedData = {
      batchID,
      type: editableType,
      quantity: editableQuantity,
      moistureLevel,
      startDate: editableDate,
      ageOfBatch: `${weeks} Weeks and ${days} Days`,
      pottingDate: dateOfPot,
      nextFertilizationDate: dateOfFertilize,
      nextPesticideApplicationDate: dateOfPesticide,
      estimatedSaleDate: dateOfSell,
      pottingCompleted,
      fertilizingCompleted,
      pesticidingCompleted,
    };

    const checkBatchIDExists = async () => {
      if (!batchID) {
        console.log("Batch ID is not provided, treating as new batch.");
        return false;
      }

      try {
        const response = await axios.get(
          "http://localhost:4000/api/batch/list"
        );
        const exists =
          Array.isArray(response.data.data) &&
          response.data.data.some(
            (batch) => String(batch.batchID).trim() === String(batchID).trim()
          );
        return exists;
      } catch (error) {
        console.error("Error fetching batch list:", error);
        return false;
      }
    };

    checkBatchIDExists().then((exists) => {
      const endpoint = exists
        ? `http://localhost:4000/api/batch/update/${batchID}`
        : "http://localhost:4000/api/batch/add";

      const requestMethod = exists ? axios.put : axios.post;

      requestMethod(endpoint, updatedData)
        .then((response) => {
          if (response.data.success) {
            console.log("Data saved successfully:", response.data);
            onEdit(); // Callback to refresh or reset the form
          } else {
            setNotification({
              open: true,
              message: response.data.message || "Failed to save batch",
            });
          }
        })
        .catch((error) => {
          console.error("Error saving data:", error);
          setNotification({
            open: true,
            message: "Error saving data. Please try again later.",
          });
        });
    });
  };

  const handleTypeChange = (event) => {
    setEditableType(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setEditableQuantity(event.target.value);
  };

  const handleDateChange = (event) => {
    setEditableDate(event.target.value);
  };

  // Handler for checkbox change
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === "potting") {
      setPottingCompleted(checked);
    } else if (name === "fertilizing") {
      setFertilizingCompleted(checked);
    } else if (name === "pesticiding") {
      setPesticidingCompleted(checked);
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const selectedItem = veg_list.find((item) => item.name === editableType);
  const imageUrl = selectedItem ? selectedItem.image : "";
  const strongStyle = { color: "#144F21" };
  const typeOptions = plantData.map((item) => (
    <MenuItem key={item._id} value={item.type}>
      {item.type}
    </MenuItem>
  ));

  const handleDelete = () => {
    const removedData = {
      batchID,
    };
    axios
      .post(`http://localhost:4000/api/batch/remove/${batchID}`, removedData)
      .then((response) => {
        if (response.data.success) {
          console.log("Batch removed successfully:", response.data);
          onDelete();
        } else {
          setNotification({
            open: true,
            message: response.data.message || "Failed to remove batch",
          });
        }
      })
      .catch((error) => {
        console.error("Error removing data:", error);
        setNotification({
          open: true,
          message: "Error removing data. Please try again later.",
        });
      });
  };

  return (
    <Card
      sx={{
        borderRadius: "20px",
        maxWidth: { xs: "280px" },
        minWidth: "1000px",
        maxHeight: "560px",
        border: "solid",
        borderColor: "#144F21",
        margin: 3,
        padding: { sm: "10px" },
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Stack display={"flex"} direction={"row"}>
        <Box flex={4}>
          <CardContent>
            <div style={{ marginBottom: "16px", display: "flex" }}>
              <strong style={{ ...strongStyle, marginRight: "11px" }}>
                Batch ID :
              </strong>
              {batchID}
            </div>

            <div style={{ marginBottom: "16px" }}>
              <strong style={strongStyle}>Type:</strong>{" "}
              {isEditing ? (
                <Select
                  size="small"
                  value={editableType}
                  onChange={handleTypeChange}
                  style={{ minWidth: "50px", width: "50%", marginLeft: "48px" }}
                >
                  {typeOptions.length > 0 ? (
                    typeOptions
                  ) : (
                    <MenuItem value="">No data available</MenuItem>
                  )}
                </Select>
              ) : (
                editableType
              )}
            </div>

            <div style={{ marginBottom: "16px", width: "300px" }}>
              <strong style={strongStyle}>Quantity:</strong>
              {isEditing ? (
                <TextField
                  size="small"
                  value={editableQuantity}
                  onChange={handleQuantityChange}
                  variant="outlined"
                  style={{ minWidth: "50px", width: "22%", marginLeft: "24px" }}
                  inputProps={{ maxLength: 10 }}
                />
              ) : (
                editableQuantity
              )}
            </div>
            <div
              style={{
                marginBottom: "16px",
                color:
                  moistureLevel <= moistureThresholds.critical
                    ? "red"
                    : moistureLevel <= moistureThresholds.low
                    ? "orange"
                    : "#144F21",
              }}
            ></div>
            <div style={{ marginBottom: "16px" }}>
              <strong style={strongStyle}>Moisture Level:</strong>{" "}
              {moistureLevel}%
            </div>

            <div style={{ marginBottom: "16px" }}>
              <strong style={strongStyle}>Batch Start Date :</strong>{" "}
              {isEditing ? (
                <TextField
                  size="small"
                  value={editableDate}
                  onChange={handleDateChange}
                  variant="outlined"
                  type="date"
                />
              ) : (
                <span>{formatDate(editableDate)}</span>
              )}
            </div>

            <div style={{ marginBottom: "16px" }}>
              <strong style={{ color: "#144F21" }}>Batch Age:</strong>{" "}
              {(() => {
                const { weeks, days } = calculateAge(editableDate);
                return `${weeks} Weeks and ${days} Days`;
              })()}
            </div>
            <div style={{ marginBottom: "12px" }}>
              <strong style={strongStyle}>Estimated Sale Date:</strong>{" "}
              {dateOfSell}
            </div>

            {renderTaskCheckbox(
              "Potting Date",
              dateOfPot,
              pottingCompleted,
              setPottingCompleted
            )}

            {renderTaskCheckbox(
              "Next Fertilization Date",
              dateOfFertilize,
              fertilizingCompleted,
              setFertilizingCompleted
            )}

            {renderTaskCheckbox(
              "Next Pesticide Application Date",
              dateOfPesticide,
              pesticidingCompleted,
              setPesticidingCompleted
            )}
          </CardContent>

          <CardActions>
            {isEditing ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                sx={{
                  backgroundColor: "#289040",
                  "&:hover": { backgroundColor: "#144820" },
                }}
              >
                Save
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleEdit}
                sx={{
                  backgroundColor: "#289040",
                  "&:hover": { backgroundColor: "#144820" },
                }}
              >
                Edit
              </Button>
            )}
            {/* Delete button */}
            {/*
            <Button
              size={"small"}
              variant="contained"
              color="secondary"
              onClick={handleDelete}
              sx={{
                backgroundColor: "red",
                "&:hover": { backgroundColor: "gray" },
              }}
            >
              <DeleteIcon sx={{ color: "white" }} />
            </Button>*/}
          </CardActions>
        </Box>
        <Box
          flex={2}
          sx={{
            display: { xs: "none", sm: "block flex" },
            flexDirection: "column",
            alignItems: "flex-start",
            border: "2px solid #144F21",
            padding: "24px",
            borderRadius: "8px",
            marginLeft: "6px",
            position: "relative",
            maxHeight: "500px",
            height: "520px",
            width: "380px",
          }}
        >
          <div
            style={{
              position: "sticky",
              top: 0,
              backgroundColor: "white",
              padding: "5px 0",
              borderBottom: "2px solid #144F21",
              width: "100%",
              marginBottom: "16px",
            }}
          >
            <strong style={{ fontSize: "16px", color: "#144F21" }}>
              NOTIFICATIONS
            </strong>
          </div>

          <div style={{ marginTop: "10px" }}>
            {notifications.length > 0 ? (
              <Stack spacing={0.5}>
                {notifications.map((notification, index) => (
                  <Alert
                    key={index}
                    severity={
                      notification.color === "red"
                        ? "error"
                        : notification.color === "orange"
                        ? "warning"
                        : "info"
                    }
                    sx={{
                      "& .MuiAlert-icon": {
                        fontSize: "25px",
                      },
                    }}
                  >
                    {notification.message}
                  </Alert>
                ))}
              </Stack>
            ) : (
              <Alert
                severity="success"
                sx={{
                  backgroundColor: "#e8f5e9",
                  "& .MuiAlert-icon": {
                    color: "#2e7d32",
                  },
                }}
              >
                <AlertTitle>All Good!</AlertTitle>
                No pending notifications
              </Alert>
            )}
          </div>

          {imageUrl && (
            <Box
              component="img"
              sx={{
                height: "200px",
                width: "200px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "white",
                borderRadius: "8px",
                bottom: -20,
                position: "absolute",
                right: -20,
              }}
              alt="Plant Image"
              src={imageUrl}
            />
          )}
        </Box>
      </Stack>
    </Card>
  );
};

EditableCard.defaultProps = {
  type: "type",
  quantity: "00",
  moistureLevel: 600,
  startDate: "2024-09-04",
  ageOfBatch: "weeks",
  pottingDate: "weeks",
  nextFertilizationDate: "weeks",
  nextPesticideApplicationDate: "weeks",
  estimatedSaleDate: "weeks",
};

export default EditableCard;
