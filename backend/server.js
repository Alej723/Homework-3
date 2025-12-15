const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://moyaramirez2003_db_user:db123@cluster0.nacpb42.mongodb.net/restaurant?retryWrites=true&w=majority";
const dbName = "HW4"; // make sure this is correct
let db;

const port = 3006; // <-- define port BEFORE using it

MongoClient.connect(uri)
  .then((client) => {
    db = client.db(dbName);
    console.log("MongoDB connection successful");

    // start server only after DB connects
    app.listen(port, () => {
      console.log(`Server running on ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed", err);
  });

// Fetch menu items
app.get("/Restaurant", async (req, res) => {
  try {
    const items = await db.collection("Restaurant").find().toArray();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
});

// Submit orders
app.post("/orders", async (req, res) => {
  try {
    const order = req.body;
    const result = await db.collection("orders").insertOne(order);
    res.json({ success: true, orderId: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit order" });
  }
});
