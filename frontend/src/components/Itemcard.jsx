import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  CardMedia,
  CardActions,
  Button,
  Stack,
  Box,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';

const EditableCard = ({
    ItemName,
    Quantity,
    onDelete,
  }) => { 
    const [editableItemName, setEditableItemName] = useState(ItemName);
    const [editableQuantity, setEditableQuantity] = useState(Quantity);

    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        // You can perform save operation here, e.g., send data to backend
    };
    
    const handleItemNameChange = (event) => {
        setEditableItemName(event.target.value);
    };
    
      const handleQuantityChange = (event) => {
        setEditableQuantity(event.target.value);
    };

    const strongStyle = { color: "#144F21" };

    return (
      <Card
        sx={{
          minWidth: "100px",
          maxHeight: "150px",
          border: "solid",
          borderColor: "#144F21",
          borderBottomWidth: 8,
          borderRightWidth: 8,
          margin: 3,
          padding: "10px",
        }}>
        
        <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
          <Box flex={4}>
            <CardContent>
             <div>
              {" "}
              {isEditing?(
                <TextField
                  size="small"
                  value={editableItemName}
                  onChange={handleItemNameChange}
                  variant="outlined"
              />
              ) : (
                editableItemName
              )}
              </div> 
            </CardContent>

            <CardMedia
            component="img"
            height="50"
            image="#"
            alt="Item Image"
            />

            <CardContent>
             <div>
              {" "}
              {isEditing?(
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
            </CardContent>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'bottom', pl: 1, pb: 1 }}>
          <IconButton aria-label="Edit">
              <EditIconIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="Done">
              <DoneIconIconIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="Delete">
              <DeleteIconIconIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          </Box>
        </Stack>
      </Card>
    );
  };

EditableCard.defautProps={
   ItemName:"Item Name",
   Quantity:"Quantity",
};

export default ItemCard;