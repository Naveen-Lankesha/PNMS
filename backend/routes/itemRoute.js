import express from "express"; // Importing the express module
import {
  addItem,
  listItem,
  removeItem,
  removeAllItems,
} from "../controllers/itemController.js"; // Importing the addShoe function from shoeController.js
import multer from "multer"; // Importing the multer module for handling file uploads

const itemRouter = express.Router(); // Creating a new instance of express.Router()

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads", // Setting the destination folder for uploaded files
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`); // Setting the filename for uploaded files
  },
});

const upload = multer({ storage: storage }); // Creating a multer middleware for handling file uploads

itemRouter.post("/add", upload.single("image"), addItem); // Route handler for handling POST requests to /add endpoint
itemRouter.get("/list", listItem); // Route handler for handling GET requests to /list endpoint
itemRouter.post("/remove", removeItem); // Route handler for handling DELETE requests to /remove endpoint
itemRouter.post("/removeAll", removeAllItems); // Route handler for handling DELETE requests to /removeAll endpoint

export default itemRouter; // Exporting the shoeRouter object as the default export of the module
