const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5001;

// Middleware to handle CORS and JSON body parsing
app.use(cors());
app.use(express.json());

// MongoDB configuration
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://plant_nursery:Ayubowan1190!@plant-nursery.adlmdyw.mongodb.net/?retryWrites=true&w=majority&appName=plant-nursery";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server
        await client.connect();

        // Define collections for inventory and sensor data
        const inventory = client.db("PlantNursery").collection("Inventory");
        const sensorData = client.db("PlantNursery").collection("SensorData");

        // Route to test server
        app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        // Route to add new inventory items
        app.post("/upload-item", async (req, res) => {
            const data = req.body;
            const result = await inventory.insertOne(data);
            res.send(result);
        });

        // Route to fetch all inventory items
        app.get("/all-items", async (req, res) => {
            let query = {};
            if (req.query?.itemName) {
                query = { brand: req.query.itemName };
            }
            const result = await inventory.find(query).toArray();
            res.send(result);
        });

        // Route to update an inventory item by ID
        app.patch("/item/:id", async (req, res) => {
            const id = req.params.id;
            const updateData = req.body;
            const filter = { _id: new ObjectId(id) };
            const updatedDoc = { $set: { ...updateData } };
            const options = { upsert: true };
            const result = await inventory.updateOne(filter, updatedDoc, options);
            res.send(result);
        });

        // Route to delete an inventory item by ID
        app.delete("/item/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await inventory.deleteOne(filter);
            res.send(result);
        });

        // Route to get a single inventory item by ID
        app.get("/item/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await inventory.findOne(filter);
            res.send(result);
        });

        // Route to upload sensor data from Arduino
        app.post("/upload-sensor-data", async (req, res) => {
            const data = req.body; // Data received from Arduino
            const threshold = 30;  // Example threshold for moisture level

            // Check if moisture level is below threshold
            if (data.moistureLevel < threshold) {
                console.log("Moisture level low. Triggering alert...");
                // You can implement notification logic here (e.g., send an email or push notification)
            }

            // Insert the sensor data into the database
            const result = await sensorData.insertOne(data);
            res.send(result);
        });

        // Route to fetch all sensor data
        app.get("/all-sensor-data", async (req, res) => {
            const result = await sensorData.find().toArray();
            res.send(result);
        });

        // Route to get sensor data by plant ID
        app.get("/sensor-data/:plantId", async (req, res) => {
            const plantId = req.params.plantId;
            const query = { plantId: plantId };
            const result = await sensorData.find(query).toArray();
            res.send(result);
        });

        // Ping the MongoDB server to confirm connection
        await client.db("admin").command({ ping: 1 });
        console.log("Connected to MongoDB successfully!");
    } finally {
        // Optionally, close the MongoDB connection when done
        // await client.close();
    }
}

run().catch(console.dir);

// Start the Express server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
