import express from "express"; 
import {
  addBatch,
  listBatch,
  removeAllBatches,
  removeBatch,
  updateMoistureLevel,
} from "../controllers/batchController.js"; 

const batchRouter = express.Router(); 

batchRouter.post("/add", addBatch); 
batchRouter.get("/list", listBatch); 
batchRouter.delete("/remove/:id", removeBatch); 
batchRouter.post("/removeAll", removeAllBatches); 
batchRouter.post("/upload-sensor-data", updateMoistureLevel); // New route for sensor data

export default batchRouter; 
