import React, { useState } from "react";
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
import DeleteIcon from "@mui/icons-material/Delete"; // Add this line
//import axios from "axios";
import { assets, veg_list } from "../../assets/frontend_assets/assets";

const EditableCard = ({
  batchID,
  type,
  stage,
  quantity,
  moistureLevel,
  n,
  p,
  k,
  pesticidesDate,
  onDelete,
}) => {
  const [editableType, setEditableType] = useState(type);
  const [editableQuantity, setEditableQuantity] = useState(quantity);
  const [editablePesticidesDate, setEditablePesticidesDate] =
    useState(pesticidesDate);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    if (!editablePesticidesDate) {
      setEditablePesticidesDate(getCurrentDate());
    }
  };

  const handleSave = () => {
    //   setIsEditing(false);
    //   const updatedData = {
    //     batchID,
    //     type: editableType,
    //     stage,
    //     quantity: editableQuantity,
    //     moistureLevel,
    //     n,
    //     p,
    //     k,
    //     pesticidesDate: editablePesticidesDate,
  };

  //   // Perform save operation here, e.g., send data to backend
  //   axios
  //     .post("/api/updateBatch", updatedData)
  //     .then((response) => {
  //       console.log("Data saved successfully:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error saving data:", error);
  //     });
  // };

  const handleTypeChange = (event) => {
    setEditableType(event.target.value);
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
            <div>
              <strong style={strongStyle}>Batch ID:</strong> {batchID}
            </div>
            <div>
              <strong style={strongStyle}>Type:</strong>{" "}
              {isEditing ? (
                <Select
                  size="small"
                  value={editableType}
                  onChange={handleTypeChange}
                  variant="outlined"
                  sx={{ minWidth: 120 }}
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
            <div>
              <strong style={strongStyle}>Stage:</strong> {stage}
            </div>
            <div>
              <strong style={strongStyle}>Quantity:</strong>{" "}
              {isEditing ? (
                <TextField
                  size="small"
                  value={editableQuantity}
                  onChange={handleQuantityChange}
                  variant="outlined"
                />
              ) : (
                editableQuantity
              )}
            </div>
            <div>
              <strong style={strongStyle}>Moisture Level:</strong>{" "}
              {moistureLevel}
            </div>
            <div>
              <strong style={strongStyle}>N:</strong> {n}
            </div>
            <div>
              <strong style={strongStyle}>P:</strong> {p}
            </div>
            <div>
              <strong style={strongStyle}>K:</strong> {k}
            </div>
            <div>
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
                  "&:hover": { backgroundColor: "gray" },
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
                  "&:hover": { backgroundColor: "gray" },
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
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
            //borderLeft: "1px solid #144F21",
          }}
        >
          {imageUrl && (
            <Box
              sx={{
                width: "200px",
                height: "200px",
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
                //position: "absolute",
                bottom: 0,
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
  type: "Type",
  stage: "Ready to Sell",
  quantity: "Quantity",
  moistureLevel: 600,
  n: 100,
  p: 200,
  k: 300,
  pesticidesDate: "Date",
};

export default EditableCard;
