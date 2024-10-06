import batchModel from "../models/batchModel.js"; 
//import fs from "fs"; // Importing the fs module for file system operations

// add batch
const addBatch = async (req, res) => {
  //let image_filename = `${req.file.filename}`; // Extracting the filename from the uploaded file and storing it in the image_filename variable

  const batch = new batchModel({
    // Creating a new instance of the batchModel class
    
    batchID: req.body.batchID,          
    type: req.body.type,                  
    quantity: req.body.quantity,          
    moistureLevel: req.body.moistureLevel, 
    startDate: req.body.startDate,        
    ageOfBatch: req.body.ageOfBatch, 
    pottingDate: req.body.pottingDate, 
    nextFertilizationDate: req.body.nextFertilizationDate,
    nextPesticideApplicationDate: req.body.nextPesticideApplicationDate,
    estimatedSaleDate: req.body.estimatedSaleDate,
    pottingCompleted: req.body.pottingCompleted,
    fertilizingCompleted: req.body.fertilizingCompleted,
    pesticidingCompleted:req.body.pesticidingCompleted
  });

  try {
    await batch.save(); // Saving the batch instance to the database
    res.json({ success: true, message: "New batch added successfully" });
  } catch (error) {
    console.log(error); 
    res.json({ success: false, message: "Failed to add new batch" });
  }
};
// update batch
const updateBatch = async (req, res) => {
  try {
    // Find the batch by the batchID from the request params
    const batch = await batchModel.findOne({ batchID: req.params.id });

    if (!batch) {
      return res.status(404).json({ success: false, message: "Batch not found" });
    }

    // Update batch with new data from req.body
    batch.type = req.body.type || batch.type;
    batch.quantity = req.body.quantity || batch.quantity;
    batch.moistureLevel = req.body.moistureLevel || batch.moistureLevel;
    batch.startDate = req.body.startDate || batch.startDate;
    batch.ageOfBatch = req.body.ageOfBatch || batch.ageOfBatch;
    batch.pottingDate = req.body.pottingDate || batch.pottingDate;
    batch.nextFertilizationDate = req.body.nextFertilizationDate || batch.nextFertilizationDate;
    batch.nextPesticideApplicationDate = req.body.nextPesticideApplicationDate || batch.nextPesticideApplicationDate;
    batch.estimatedSaleDate = req.body.estimatedSaleDate || batch.estimatedSaleDate;
    batch.pottingCompleted = req.body.pottingCompleted || batch.pottingCompleted;
    batch.fertilizingCompleted = req.body.fertilizingCompleted || batch.fertilizingCompleted;
    batch.pesticidingCompleted = req.body.pesticidingCompleted || batch.pesticidingCompleted;

    // Save the updated batch
    await batch.save();

    res.json({ success: true, message: "Batch updated successfully", data: batch });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to update batch" });
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

export { addBatch,updateBatch, listBatch, removeBatch, removeAllBatches }; 