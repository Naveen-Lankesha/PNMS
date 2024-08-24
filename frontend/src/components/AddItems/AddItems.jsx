import {
  Box,
  Stack,
  TextField,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Button,
  Typography,
  FormHelperText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { assets } from "../../assets/admin_assets/assets";
import { toast } from "react-toastify";

import { StoreContext } from "../../context/StoreContext";

const Add = () => {
  const { url } = useContext(StoreContext);
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });
  const [errors, setErrors] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!data.name) tempErrors.name = "Product Name is required.";
    if (!data.description)
      tempErrors.description = "Product Description is required.";
    if (!data.category) tempErrors.category = "Product Category is required.";
    if (!data.price) tempErrors.price = "Product Price is required.";
    if (data.price && isNaN(data.price))
      tempErrors.price = "Product Price must be a number.";
    if (!image) tempErrors.image = "Product Image is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const onChangeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleDialogOpen = () => {
    if (validate()) {
      setOpenDialog(true);
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleFormSubmit = async () => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    formData.append("image", image);

    try {
      const response = await axios.post(url + "/api/item/add", formData);
      // Reset form
      setData({
        name: "",
        description: "",
        category: "",
        price: "",
      });
      setImage(null);
      console.log("Form submitted successfully", response.data);
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error(error.response.data.message);
    } finally {
      handleDialogClose();
    }
  };

  return (
    <Box sx={{ pl: 8, pr: 8 }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <Stack spacing={3}>
          <Box>
            <Typography sx={{ color: "grey" }}>Upload Image</Typography>
            <label htmlFor="image">
              <img
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                style={{ cursor: "pointer", maxWidth: 300 }}
                alt="upload"
              />
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              style={{ display: "none" }}
            />
            {errors.image && (
              <FormHelperText error>{errors.image}</FormHelperText>
            )}
          </Box>
          <TextField
            onChange={onChangeHandler}
            value={data.name}
            label="Product Name"
            name="name"
            required
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            label="Product Description"
            required
            multiline
            rows={4}
            error={!!errors.description}
            helperText={errors.description}
          />
          <FormControl fullWidth error={!!errors.category}>
            <InputLabel id="demo-simple-select-label">Category *</InputLabel>
            <Select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
            >
              <MenuItem value="Material">Material</MenuItem>
              <MenuItem value="Seeds">Seeds</MenuItem>
              <MenuItem value="Plants">Plants</MenuItem>
            </Select>
            {errors.category && (
              <FormHelperText error>{errors.category}</FormHelperText>
            )}
          </FormControl>
          <TextField
            onChange={onChangeHandler}
            name="price"
            value={data.price}
            label="Product Price (Rs.)"
            required
            error={!!errors.price}
            helperText={errors.price}
          />

          <Button
            type="button"
            variant="contained"
            sx={{ fontWeight: 600 }}
            onClick={handleDialogOpen}
          >
            Add
          </Button>
        </Stack>
      </form>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle sx={{ fontWeight: 600 }}>Confirm Add</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to add this Item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleDialogClose}
            color="primary"
          >
            Cancel
          </Button>
          <Button variant="outlined" onClick={handleFormSubmit} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Add;

// import {
//   Box,
//   Stack,
//   TextField,
//   MenuItem,
//   FormControl,
//   Select,
//   InputLabel,
//   Button,
//   Typography,
//   FormHelperText,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { assets } from "../../assets/assets";

// const Add = () => {
//   const [image, setImage] = useState(null);

//   const [data, setData] = useState({
//     name: "",
//     description: "",
//     category: "",
//     price: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     let tempErrors = {};
//     if (!data.name) tempErrors.name = "Product Name is required.";
//     if (!data.description)
//       tempErrors.description = "Product Description is required.";
//     if (!data.category) tempErrors.category = "Product Category is required.";
//     if (!data.price) tempErrors.price = "Product Price is required.";
//     if (data.price && isNaN(data.price))
//       tempErrors.price = "Product Price must be a number.";
//     if (!image) tempErrors.image = "Product Image is required.";
//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const onChangeHandler = (event) => {
//     setData({ ...data, [event.target.name]: event.target.value });
//   };

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

//   const url = "http://localhost:4000";
//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     if (!validate()) return;

//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("description", data.description);
//     formData.append("category", data.category);
//     formData.append("price", Number(data.price));
//     formData.append("image", image);

//     try {
//       const response = await axios.post(`${url}/api/shoe/add`, formData);
//       // Reset form
//       setData({
//         name: "",
//         description: "",
//         category: "",
//         price: "",
//       });
//       setImage(null);
//       console.log("Form submitted successfully", response.data);
//     } catch (error) {
//       console.error("Error submitting form", error);
//     }
//   };

//   return (
//     <Box sx={{ p: 8 }}>
//       <form onSubmit={onSubmitHandler}>
//         <Stack spacing={3}>
//           <Box>
//             <Typography sx={{ color: "grey" }}>Upload Image</Typography>
//             <label htmlFor="image">
//               <img
//                 src={image ? URL.createObjectURL(image) : assets.upload_area}
//                 style={{ cursor: "pointer", maxWidth: 300 }}
//                 alt="upload"
//               />
//             </label>
//             <input
//               onChange={(e) => setImage(e.target.files[0])}
//               type="file"
//               id="image"
//               style={{ display: "none" }}
//             />
//             {errors.image && (
//               <FormHelperText error>{errors.image}</FormHelperText>
//             )}
//           </Box>
//           <TextField
//             onChange={onChangeHandler}
//             value={data.name}
//             label="Product Name"
//             name="name"
//             required
//             error={!!errors.name}
//             helperText={errors.name}
//           />
//           <TextField
//             onChange={onChangeHandler}
//             value={data.description}
//             name="description"
//             label="Product Description"
//             required
//             multiline
//             rows={4}
//             error={!!errors.description}
//             helperText={errors.description}
//           />
//           <FormControl fullWidth error={!!errors.category}>
//             <InputLabel id="demo-simple-select-label">Category *</InputLabel>
//             <Select
//               onChange={onChangeHandler}
//               value={data.category}
//               name="category"
//               required
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               label="Category">
//               <MenuItem value="Nike">Nike</MenuItem>
//               <MenuItem value="Adidas">Adidas</MenuItem>
//               <MenuItem value="Puma">Puma</MenuItem>
//               <MenuItem value="Reebok">Reebok</MenuItem>
//             </Select>
//             {errors.category && (
//               <FormHelperText error>{errors.category}</FormHelperText>
//             )}
//           </FormControl>
//           <TextField
//             onChange={onChangeHandler}
//             name="price"
//             value={data.price}
//             label="Product Price (£)"
//             required
//             error={!!errors.price}
//             helperText={errors.price}
//           />

//           <Button type="submit" variant="contained" sx={{ fontWeight: 600 }}>
//             Add
//           </Button>
//         </Stack>
//       </form>
//     </Box>
//   );
// };

// export default Add;
