import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  CardActions,
  Button,
  Stack,
  Box,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import NotificationBack from "../assets/notificationback.png";

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
  };

  const handleSave = () => {
    setIsEditing(false);
    // You can perform save operation here, e.g., send data to backend
  };

  const handleTypeChange = (event) => {
    setEditableType(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setEditableQuantity(event.target.value);
  };

  const handlePesticidesDateChange = (event) => {
    setEditablePesticidesDate(event.target.value);
  };

  // change strong style
  const strongStyle = { color: "#144F21" };

  return (
    <Card
      sx={{
        minWidth: "700px",
        maxHeight: "340px",
        border: "solid",
        borderColor: "#144F21",
        borderBottomWidth: 8,
        borderRightWidth: 8,
        margin: 3,
        padding: "10px",
      }}>
      <Stack display={"flex"} direction={"row"}>
        <Box flex={4}>
          <CardContent>
            <div>
              <strong style={strongStyle}>Batch ID:</strong> {batchID}
            </div>
            <div>
              <strong style={strongStyle}>Type:</strong>{" "}
              {isEditing ? (
                <TextField
                  size="small"
                  value={editableType}
                  onChange={handleTypeChange}
                  variant="outlined"
                />
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
                }}>
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
                }}>
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
              }}>
              <DeleteIcon sx={{ color: "white" }} />
            </Button>
          </CardActions>
        </Box>
        <Box
          flex={4}
          style={{
            backgroundImage: `url(${NotificationBack})`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}></Box>
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
