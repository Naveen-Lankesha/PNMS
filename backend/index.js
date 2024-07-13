const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5001;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const twilio = require('twilio');

// Twilio configuration
const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const clientTwilio = new twilio(accountSid, authToken);

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// MongoDB config
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
        // Send a ping to confirm a successful connection
        const inventory = client.db("Inventory").collection("Items");
        const sensorDataCollection = client.db("SensorData").collection("Readings");

        // Endpoint to receive sensor data from Arduino
        app.post('/sensor-data', async (req, res) => {
            const { moistureLevel } = req.body;

            try {
                // Store sensor data in MongoDB with a timestamp
                const result = await sensorDataCollection.insertOne({
                    moistureLevel,
                    timestamp: new Date()
                });

                // Check if moisture level is below the threshold
                if (moistureLevel < 30) { // Example threshold
                    // Send notification via Twilio
                    await clientTwilio.messages.create({
                        body: 'Soil moisture level is low. Please water your plants!',
                        from: 'your_twilio_number',
                        to: 'your_phone_number'
                    });
                }

                res.status(200).send(result);
            } catch (error) {
                res.status(500).send('Error saving data');
            }
        });

        // Insert an item to db
        app.post("/upload-item", async (req, res) => {
            const data = req.body;
            const result = await inventory.insertOne(data);
            res.send(result);
        });

        // Get all items & find by a category from db
        app.get("/all-items", async (req, res) => {
            let query = {};
            if (req.query?.itemName) {
                query = { brand: req.query.itemName };
            }
            const result = await inventory.find(query).toArray();
            res.send(result);
        });

        // Update an item
        app.patch("/item/:id", async (req, res) => {
            const id = req.params.id;
            const updateInventoryData = req.body;
            const filter = { _id: new ObjectId(id) };
            const updatedDoc = {
                $set: {
                    ...updateInventoryData
                }
            };
            const options = { upsert: true };

            const result = await inventory.updateOne(filter, updatedDoc, options);
            res.send(result);
        });

        // Delete an item from db
        app.delete("/item/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await inventory.deleteOne(filter);
            res.send(result);
        });

        // Get a single item data
        app.get("/item/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await inventory.findOne(filter);
            res.send(result);
        });

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
