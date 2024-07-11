import express from "express";
import {
  addToCart,
  getCart,
  getSize,
  removeFromCart,
  updateShoeSize,
} from "../controllers/cartController.js";

import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

//endpoint to add items to user cart
cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeFromCart);
cartRouter.post("/get", authMiddleware, getCart);
cartRouter.post("/updateShoeSize", authMiddleware, updateShoeSize);
cartRouter.post("/getShoeSize", authMiddleware, getSize);

export default cartRouter;
