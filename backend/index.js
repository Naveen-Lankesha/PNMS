import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import shoeRouter from "./routes/shoeRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
//import orderRouter from "./routes/orderRoute.js";
import "dotenv/config";

//-----------db pw: 26268
//app config
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

// API endpoints
app.use("/api/shoe", shoeRouter);
app.use("/images", express.static("uploads")); // Serving the uploaded images from the "uploads" folder by mounting the "/images" route to the "uploads" folder using express.static middleware
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

//listen
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// mongodb+srv://lankesha:26268@cluster0.nnacnu2.mongodb.net/?

// const express = require('express')
// const app = express();
// const cors = require('cors')
// const port = process.env.PORT || 5001;

// // middlewear 
// app.use(cors());
// app.use(express.json());


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// // mongodb config here
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const uri = "mongodb+srv://plant_nursery:Ayubowan1190!@plant-nursery.adlmdyw.mongodb.net/?retryWrites=true&w=majority&appName=plant-nursery";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect the client to the server
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         const inventory = client.db("Inventory").collection("Items");


//         // insert an item to db
//         app.post("/upload-item", async (req, res) => {
//             const data = req.body;
//             // console.log(data);
//             const result = await inventory.insertOne(data);
//             res.send(result);
//         })

//         // // get all mobiles from db
//         // app.get("/all-mobiles", async (req, res) => {
//         //     const mobiles = mobileCollections.find();
//         //     const result = await mobiles.toArray();
//         //     res.send(result)
//         // })

//         // get all items & find by a category from db
//         app.get("/all-items", async (req, res) => {
//             let query = {};
//             if (req.query?.itemName) {
//                 query = { brand: req.query.itemName }
//             }
//             const result = await inventory.find(query).toArray();
//             res.send(result)
//         })

//         // update an item
//         app.patch("/item/:id", async (req, res) => {
//             const id = req.params.id;
//             // console.log(id);
//             const updateInventoryData = req.body;
//             const filter = { _id: new ObjectId(id) };
//             const updatedDoc = {
//                 $set: {
//                     ...updateInventoryData
//                 }
//             }
//             const options = { upsert: true };

//             // update now
//             const result = await inventory.updateOne(filter, updatedDoc, options);
//             res.send(result);
//         })


//         // delete one item from db
//         app.delete("/item/:id", async (req, res) => {
//             const id = req.params.id;
//             const filter = { _id: new ObjectId(id) };
//             const result = await inventory.deleteOne(filter);
//             res.send(result);
//         })


//         // get a single item data
//         app.get("/item/:id", async (req, res) => {
//             const id = req.params.id;
//             const filter = { _id: new ObjectId(id) };
//             const result = await inventory.findOne(filter);
//             res.send(result)
//         })


//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         // await client.close();
//     }
// }
// run().catch(console.dir);

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })