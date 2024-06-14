import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  CardMedia,
  CardActions,
  IconButton,
  Button,
  Stack,
  Box,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';

const EditableItemCard = ({
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

    /*const strongStyle = { color: "#144F21" };*/

    return (
      <Card
        sx={{
          Width: "300px",
          Height: "400px",
          border: "solid",
          borderColor: "#144F21",
          margin: 3,
          padding: "10px",
        }}>
        
        <Stack display="flex" direction="row"  >
          <Box>
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
            height="170"
            width="150"
            border= "solid"
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
          <Box sx={{ display: 'flex', alignItems: 'left', pl: 1, pt: 30}}>
          <IconButton aria-label="Edit"  onclick={handleEdit}>
              <EditIcon sx={{ height: 25, width: 25 }} />
          </IconButton>
          <IconButton aria-label="Done"  onclick={handleSave}>
              <DoneIcon sx={{ height: 25, width: 25 }} />
          </IconButton>
          <IconButton aria-label="Delete" onclick={onDelete}>
              <DeleteIcon sx={{ height: 25, width: 25 }} />
          </IconButton>
          </Box>
        </Stack>
      </Card>
    );
  };

EditableItemCard.defautProps={
   ItemName:"Item Name",
   Quantity:"Quantity",
};

export default EditableItemCard;