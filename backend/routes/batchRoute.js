import express from "express";
import {
  addBatch,
  updateBatch,
  listBatch,
  removeAllBatches,
  removeBatch,
  updateMoistureLevel,
} from "../controllers/batchController.js";

const batchRouter = express.Router();

batchRouter.post("/add", addBatch);
batchRouter.get("/list", listBatch);
batchRouter.post("/remove/:id", removeBatch);
batchRouter.put("/update/:id", updateBatch);
batchRouter.delete("/remove-all", removeAllBatches);
export default batchRouter;
