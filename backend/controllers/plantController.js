import plantModel from "../models/plantModel.js"; // Importing the shoeModel module from the "../models/shoeModel.js" file

// add plant
const addPlant = async (req, res) => {

  const plant = new plantModel({
    // Creating a new instance of the plantModel class
    type: req.body.type, // Assigning the value of the "type" property from the request body to the "type" property of the plant instance
    duration_to_pot: req.body.duration_to_pot, 
    duration_to_fertilize: req.body.duration_to_fertilize, 
    duration_to_pesticide: req.body.duration_to_pesticide, 
    duration_to_sell: req.body.duration_to_sell, 
  });

  try {
    await plant.save(); // Saving the plant instance to the database
    res.json({ success: true, message: "added successfully" }); // Sending a JSON response indicating that the plant was added successfully
  } catch (error) {
    console.log("Error adding plant:", error.message); // Logging any error that occurred during the saving process
    res.status(500).json({ success: false, message: error.message }); // Sending a JSON response indicating that the plant addition failed
  }
};

// all list
const listPlant = async (req, res) => {
  try {
    const plant = await plantModel.find({}); // Fetching all plants from the database
    res.json({ success: true, data: plant }); // Sending a JSON response with the list of plants
  } catch (error) {
    console.log(error); // Logging any error that occurred during the fetching process
    res.json({ success: false, message: "Failed to fetch plant list" }); // Sending a JSON response indicating that the fetching failed
  }
};

//remove plant
const removePlant = async (req, res) => {
  try {
    const plant = await plantModel.findById(req.body.id); // Finding the plant by ID

    await plantModel.findByIdAndDelete(req.body.id); // Removing the plant from the database

    res.json({ success: true, message: "Plant removed successfully" }); // Sending a JSON response indicating that the plant was removed successfully
  } catch (error) {
    console.log(error); // Logging any error that occurred during the removal process
    res.json({ success: false, message: "Failed to remove plant" }); // Sending a JSON response indicating that the removal failed
  }
};

//remove all plants
const removeAllPlants = async (req, res) => {
  try {
    const plant = await plantModel.find({}); // Fetching all plants from the database

    await plantModel.deleteMany({}); // Removing all plants from the database

    res.json({ success: true, message: "All plants removed successfully" }); // Sending a JSON response indicating that all plants were removed successfully
  } catch (error) {
    console.log(error); // Logging any error that occurred during the removal process
    res.json({ success: false, message: "Failed to remove all plants" }); // Sending a JSON response indicating that the removal failed
  }
};

export { addPlant, listPlant, removePlant, removeAllPlants }; // Exporting the addShoe function to make it accessible from other modules
