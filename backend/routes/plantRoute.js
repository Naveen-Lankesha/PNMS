import express from "express"; // Importing the express module
import {
  addPlant,
  listPlant,
  removePlant,
  removeAllPlants,
} from "../controllers/plantController.js"; 

const plantRouter = express.Router(); // Creating a new instance of express.Router()

plantRouter.post("/add", addPlant); // Route handler for handling POST requests to /add endpoint
plantRouter.get("/list", listPlant); // Route handler for handling GET requests to /list endpoint
plantRouter.post("/remove", removePlant); // Route handler for handling DELETE requests to /remove endpoint
plantRouter.post("/removeAll", removeAllPlants); // Route handler for handling DELETE requests to /removeAll endpoint

export default plantRouter; // Exporting the shoeRouter object as the default export of the module
