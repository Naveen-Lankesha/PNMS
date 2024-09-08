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
  MenuItem,
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
  const [editableType, setEditableType] = useState(type);
  const [editableQuantity, setEditableQuantity] = useState(quantity);
  const [editableDate, setEditableDate] = useState(startDate);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
  });
  const [plantData, setPlantData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/plant/list"
        );
        console.log("API Response:", response.data); // Log the response data

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

  const calculateAge = (startDate) => {
    const today = new Date();
    const start = new Date(startDate);
    const diffInMs = today - start;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffInDays / 7);
    const days = diffInDays % 7;
    return { weeks, days };
  };

  const handleEdit = () => {
    if (!editableDate) {
      setEditableDate(getCurrentDate());
    }
    onEdit();
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
    };

    axios
      .post("http://localhost:4000/api/batch/add", updatedData)
      .then((response) => {
        if (response.data.success) {
          console.log("Data saved successfully:", response.data);
          onEdit();
        } else {
          setNotification({
            open: true,
            message: response.data.message || "Failed to add new batch",
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

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
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
        minWidth: { sm: "700px" },
        maxHeight: "400px",
        border: "solid",
        borderColor: "#144F21",
        borderBottomWidth: { sm: 8 },
        borderRightWidth: { sm: 8 },
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
            <div style={{ marginBottom: "2px", display: "flex" }}>
              <strong style={{ ...strongStyle, marginRight: "11px" }}>
                Batch ID :
              </strong>
              {batchID}
            </div>

            <div style={{ marginBottom: "2px" }}>
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

            <div style={{ marginBottom: "2px", width: "300px" }}>
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
            <div style={{ marginBottom: "2px" }}>
              <strong style={strongStyle}>Moisture Level:</strong>{" "}
              {moistureLevel}
            </div>

            <div style={{ marginBottom: "2px" }}>
              <strong style={strongStyle}>Batch Start Date:</strong>{" "}
              {isEditing ? (
                <TextField
                  size="small"
                  value={editableDate}
                  onChange={handleDateChange}
                  variant="outlined"
                  type="date"
                />
              ) : (
                editableDate
              )}
            </div>

            <div style={{ marginBottom: "2px" }}>
              <strong style={{ color: "#144F21" }}>Age of Batch:</strong>{" "}
              {(() => {
                const { weeks, days } = calculateAge(editableDate);
                return `${weeks} Weeks and ${days} Days`;
              })()}
            </div>
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
            </Button>
          </CardActions>
        </Box>
        <Box
          flex={2}
          sx={{
            display: { xs: "none", sm: "block flex" },
            flexDirection: "column",
            alignItems: "flex-start",
            border: "2px solid #144F21",
            padding: 3,
            borderRadius: "8px",
            marginLeft: "6px",
            position: "relative",
          }}
        >
          {/* Content for the new box */}
          <div
            style={{
              top: 20,
              textAlign: "left",
              position: "absolute",
              width: "100%",
            }}
          >
            <div style={{ fontSize: "Medium" }}>NOTIFICATIONS</div>
          </div>

          {imageUrl && (
            <Box
              component="img"
              sx={{
                height: "130px",
                width: "130px",
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
  stage: "stage",
  quantity: "00",
  moistureLevel: 600,
  startDate: "2024-09-04",
  ageOfBatch: "weeks",
};

export default EditableCard;
