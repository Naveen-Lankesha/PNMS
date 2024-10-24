import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import batchRouter from "./routes/batchRoute.js";
import userRouter from "./routes/userRoute.js";
import itemRouter from "./routes/itemRoute.js";
import plantRouter from "./routes/plantRoute.js";
import inventoryRouter from "./routes/inventoryRoute.js";

import "dotenv/config";

//-----------db pw: 26268
//app config
const app = express();
//const cors = require('cors');
const port = process.env.PORT || 4000;

// Middleware to handle CORS and JSON body parsing
app.use(cors());
app.use(express.json());
app.use(cors());

//db connection
connectDB();

// API endpoints
app.use("/api/batch", batchRouter);
app.use("/images", express.static("uploads")); // Serving the uploaded images from the "uploads" folder by mounting the "/images" route to the "uploads" folder using express.static middleware
app.use("/api/user", userRouter);
app.use("/api/item", itemRouter);
app.use("/api/plant", plantRouter);
app.use("/api/inventory", inventoryRouter);

//app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

//listen
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

