import batchModel from "../models/batchModel.js"; 
//import fs from "fs"; // Importing the fs module for file system operations

// add batch
const addBatch = async (req, res) => {
  //let image_filename = `${req.file.filename}`; // Extracting the filename from the uploaded file and storing it in the image_filename variable

  const batch = new batchModel({
    // Creating a new instance of the batchModel class
    batchID: req.body.batchID, 
    type: req.body.type, 
    stage: req.body.stage, 
    quantity: req.body.quantity, 
    moistureLevel: req.body.moistureLevel, 
    pestDate: req.body.pestDate
  });

  try {
    await batch.save(); // Saving the batch instance to the database
    res.json({ success: true, message: "New batch added successfully" });
  } catch (error) {
    console.log(error); 
    res.json({ success: false, message: "Failed to add new batch" });
  }
};

// Update moisture level
const updateMoistureLevel = async (req, res) => {
  const { plantId, moistureLevel } = req.body;

  try {
    const batch = await batchModel.findOne({ batchID: plantId });
    if (!batch) {
      return res.status(404).json({ success: false, message: "Batch not found" });
    }

    batch.moistureLevel = moistureLevel;
    await batch.save();

    res.json({ success: true, message: "Moisture level updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to update moisture level" });
  }
};



// all batch list
const listBatch = async (req, res) => {
  try {
    const batches = await batchModel.find({}); 
    res.json({ success: true, data: batches }); 
  } catch (error) {
    console.log(error); 
    res.json({ success: false, message: "Failed to fetch batch list" }); 
  }
};

//remove batch item
const removeBatch = async (req, res) => {
  try {
    const batch = await batchModel.findOne({batchID: req.params.id}); 
    if (!batch) {
      return res.status(404).json({ success: false, message: "Batch not found" });
    }

    await batchModel.findByIdAndDelete(batch._id); 

    res.json({ success: true, message: "Batch removed successfully" }); 
  } catch (error) {
    console.log(error); 
    res.status(500).json({ success: false, message: "Failed to remove the batch" }); 
  }
};

//remove all batches
const removeAllBatches = async (req, res) => {
  try {
    const batches = await batchModel.find({}); 

    // batches.forEach((batch) => {
    //   const imagePath = `uploads/${shoe.image}`; // Constructing the path to the image file
    //   fs.unlinkSync(imagePath, () => {}); // Deleting the image file from the file system
    // });

    await batchModel.deleteMany({}); 

    res.json({ success: true, message: "All batches removed successfully" }); 
  } catch (error) {
    console.log(error); 
    res.json({ success: false, message: "Failed to remove all batches" }); 
  }
};

export { addBatch, listBatch, removeBatch, removeAllBatches, updateMoistureLevel }; 