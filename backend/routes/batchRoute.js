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
batchRouter.post("/remove/:id", removeBatch); 

export default batchRouter; 
