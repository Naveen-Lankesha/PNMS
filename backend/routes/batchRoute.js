import express from "express"; 
import {
  addBatch,
  listBatch,
  removeAllBatches,
  removeBatch,
} from "../controllers/batchController.js"; 

const batchRouter = express.Router(); 

batchRouter.post("/add", addBatch); 
batchRouter.get("/list", listBatch); 
batchRouter.delete("/remove/:id", removeBatch); 
batchRouter.post("/removeAll", removeAllBatches); 

export default batchRouter; 
