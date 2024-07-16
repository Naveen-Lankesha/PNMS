import express from "express"; 
import {
  addBatch,
  listBatch,
  removeAllBatches,
  removeBatch,
} from "../controllers/batchController.js"; 
//import multer from "multer"; // Importing the multer module for handling file uploads

const batchRouter = express.Router(); 

// Image Storage Engine
// const storage = multer.diskStorage({
//   destination: "uploads", // Setting the destination folder for uploaded files
//   filename: (req, file, cb) => {
//     return cb(null, `${Date.now()}${file.originalname}`); // Setting the filename for uploaded files
//   },
// });

//const upload = multer({ storage: storage }); // Creating a multer middleware for handling file uploads

batchRouter.post("/add", addBatch); 
batchRouter.get("/list", listBatch); 
batchRouter.post("/remove", removeBatch); 
batchRouter.post("/removeAll", removeAllBatches); 

export default batchRouter; 
