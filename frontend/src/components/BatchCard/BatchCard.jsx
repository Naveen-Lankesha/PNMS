import React, { useState } from "react";
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
  stage,
  quantity,
  moistureLevel,
  pestDate,
  //cnextpestDate,
  onDelete,
  isEditing,
  onEdit,
}) => {
  const [editableType, setEditableType] = useState(type);
  const [editableStage, setEditableStage] = useState(stage);
  const [editableQuantity, setEditableQuantity] = useState(quantity);
  const [editablePesticidesDate, setEditablePesticidesDate] =
    useState(pestDate);
  //const [isEditing, setIsEditing] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
  });

  const handleEdit = () => {
    if (!editablePesticidesDate) {
      setEditablePesticidesDate(getCurrentDate());
    }
    onEdit();
  };

  const handleSave = () => {
    const updatedData = {
      batchID,
      type: editableType,
      stage,
      quantity: editableQuantity,
      moistureLevel,
      pestDate: editablePesticidesDate,
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

  const handleStageChange = (event) => {
    setEditableStage(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setEditableQuantity(event.target.value);
  };

  const handlePesticidesDateChange = (event) => {
    setEditablePesticidesDate(event.target.value);
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  };

  const selectedItem = veg_list.find((item) => item.name === editableType);
  const imageUrl = selectedItem ? selectedItem.image : "";
  // change strong style
  const strongStyle = { color: "#144F21" };
  const typeOptions = veg_list.map((item) => ({
    id: item._id,
    value: item.name,
  }));

  const StageList = ["Seedlings", "Young Plants", "Mature Plants"];

  return (
    <Card
      sx={{
        borderRadius: "20px",
        minWidth: "700px",
        maxHeight: "400px",
        border: "solid",
        borderColor: "#144F21",
        borderBottomWidth: 8,
        borderRightWidth: 8,
        margin: 3,
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Stack display={"flex"} direction={"row"}>
        <Box flex={4}>
          <CardContent>
            <div style={{ marginBottom: "2px" }}>
              <strong style={{ ...strongStyle, marginRight: "11px" }}>
                Batch ID :
              </strong>{" "}
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
                  {typeOptions.map((option) => (
                    <MenuItem key={option.id} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </Select>
              ) : (
                editableType
              )}
            </div>
            <div style={{ marginBottom: "2px" }}>
              <strong style={strongStyle}>Stage:</strong>{" "}
              {isEditing ? (
                <Select
                  size="small"
                  value={editableStage}
                  onChange={handleStageChange}
                  style={{ minWidth: "50px", width: "50%", marginLeft: "40px" }}
                >
                  {StageList.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              ) : (
                editableStage
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
                  style={{ minWidth: "50px", width: "22%", marginLeft: "24px" }} // Set desired min width and width
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
              <strong style={strongStyle}>Pesticides applied on:</strong>{" "}
              {isEditing ? (
                <TextField
                  size="small"
                  value={editablePesticidesDate}
                  onChange={handlePesticidesDateChange}
                  variant="outlined"
                  type="date"
                />
              ) : (
                editablePesticidesDate
              )}
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
              onClick={onDelete}
              sx={{
                backgroundColor: "gray",
                "&:hover": { backgroundColor: "red" },
              }}
            >
              <DeleteIcon sx={{ color: "white" }} />
            </Button>
          </CardActions>
        </Box>
        <Box
          flex={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            border: "2px solid #144F21",
            padding: 8,
            borderRadius: "8px",
            marginLeft: "6px",
            position: "relative",
          }}
        >
          {/* Content for the new box */}
          <div
            style={{
              top: 20,
              aligh: "center",
              position: "absolute",
            }}
          >
            <div style={{ color: "red", fontSize: "Medium" }}>
              NOTIFICATIONS!
            </div>
          </div>

          {imageUrl && (
            <Box
              sx={{
                width: "150px",
                height: "150px",
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "white",
                borderRadius: "8px",
                //position: "absolute",
                bottom: 0,
                position: "absolute",
                right: 0,
                //border: "2px solid #144F21",
              }}
            />
          )}
        </Box>
      </Stack>
    </Card>
  );
};

// Default data
EditableCard.defaultProps = {
  type: "type",
  stage: "stage",
  quantity: "00",
  moistureLevel: 600,
  pestDate: "Date",
};

export default EditableCard;
