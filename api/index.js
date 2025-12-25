const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const url = process.env.MONGO_URI;
if (!url) {
  console.error("❌ MONGO_URI is missing");
  process.exit(1);
}

const client = new MongoClient(url);

// Database
const dbName = "PassManager";

let db, collection;

async function connectDB() {
  if (!db) {
    await client.connect();
    console.log("✅ Connected successfully to MongoDB");
    db = client.db(dbName);
    collection = db.collection("passwords");
  }
}

// Routes
app.get('/', async (req, res) => {
  try {
    await connectDB();
    const findResult = await collection.find({}).toArray();
    res.json(findResult);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch passwords" });
  }
});

app.post('/', async (req, res) => {
  try {
    await connectDB();
    const passwords = req.body;
    const insertedpass = await collection.insertOne(passwords);
    res.json(insertedpass);
  } catch (err) {
    res.status(500).json({ error: "Failed to insert password" });
  }
});

app.delete('/:id', async (req, res) => {
  try {
    await connectDB();
    const id = req.params.id;
    await collection.deleteOne({ _id: new ObjectId(id) });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete password" });
  }
});

module.exports = app;