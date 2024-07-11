import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "../controllers/inventoryController.js";

import authMiddleware from "../middleware/auth.js";

const inventoryRouter = express.Router();

//endpoint to add items to user cart
inventoryRouter.post("/add", authMiddleware, addToCart);
inventoryRouter.post("/remove", authMiddleware, removeFromCart);
inventoryRouter.post("/get", authMiddleware, getCart);
//cartRouter.post("/updateShoeSize", authMiddleware, updateShoeSize);
//cartRouter.post("/getShoeSize", authMiddleware, getSize);

export default inventoryRouter;
