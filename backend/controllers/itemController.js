import itemModel from "../models/itemModel.js"; // Importing the shoeModel module from the "../models/shoeModel.js" file
import fs from "fs"; // Importing the fs module for file system operations

// add item
const addItem = async (req, res) => {
  let image_filename = `${req.file.filename}`; // Extracting the filename from the uploaded file and storing it in the image_filename variable

  const item = new itemModel({
    // Creating a new instance of the shoeModel class
    name: req.body.name, // Assigning the value of the "name" property from the request body to the "name" property of the shoe instance
    description: req.body.description, // Assigning the value of the "description" property from the request body to the "description" property of the shoe instance
    price: req.body.price, // Assigning the value of the "price" property from the request body to the "price" property of the shoe instance
    image: image_filename, // Assigning the value of the image_filename variable to the "image" property of the shoe instance
    category: req.body.category, // Assigning the value of the "category" property from the request body to the "category" property of the shoe instance
  });

  try {
    await item.save(); // Saving the shoe instance to the database
    res.json({ success: true, message: "added successfully" }); // Sending a JSON response indicating that the shoe was added successfully
  } catch (error) {
    console.log(error); // Logging any error that occurred during the saving process
    res.json({ success: false, message: "Failed to add" }); // Sending a JSON response indicating that the shoe addition failed
  }
};

// all list
const listItem = async (req, res) => {
  try {
    const item = await itemModel.find({}); // Fetching all shoe items from the database
    res.json({ success: true, data: item }); // Sending a JSON response with the list of shoe items
  } catch (error) {
    console.log(error); // Logging any error that occurred during the fetching process
    res.json({ success: false, message: "Failed to fetch item list" }); // Sending a JSON response indicating that the fetching failed
  }
};

//remove item
const removeItem = async (req, res) => {
  try {
    const item = await itemModel.findById(req.body.id); // Finding the shoe item by ID
    const imagePath = `uploads/${item.image}`; // Constructing the path to the image file

    fs.unlinkSync(imagePath, () => {}); // Deleting the image file from the file system

    await itemModel.findByIdAndDelete(req.body.id); // Removing the shoe item from the database

    res.json({ success: true, message: "Item removed successfully" }); // Sending a JSON response indicating that the shoe was removed successfully
  } catch (error) {
    console.log(error); // Logging any error that occurred during the removal process
    res.json({ success: false, message: "Failed to remove item" }); // Sending a JSON response indicating that the removal failed
  }
};

//remove all items
const removeAllItems = async (req, res) => {
  try {
    const item = await itemModel.find({}); // Fetching all shoe items from the database

    item.forEach((item) => {
      const imagePath = `uploads/${item.image}`; // Constructing the path to the image file
      fs.unlinkSync(imagePath, () => {}); // Deleting the image file from the file system
    });

    await itemModel.deleteMany({}); // Removing all shoe items from the database

    res.json({ success: true, message: "All items removed successfully" }); // Sending a JSON response indicating that all shoes were removed successfully
  } catch (error) {
    console.log(error); // Logging any error that occurred during the removal process
    res.json({ success: false, message: "Failed to remove all items" }); // Sending a JSON response indicating that the removal failed
  }
};

export { addItem, listItem, removeItem, removeAllItems }; // Exporting the addShoe function to make it accessible from other modules
