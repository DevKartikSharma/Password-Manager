import dotenv from "dotenv";
import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import cors from "cors";

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const url = process.env.MONGO_URI;
if (!url) {
  console.error("❌ MONGO_URI is missing in .env");
  process.exit(1);
}

const client = new MongoClient(url);

// Database
const dbName = "PassManager";

await client.connect();
console.log("✅ Connected successfully to MongoDB");

const db = client.db(dbName);
const collection = db.collection("passwords");

// Routes
app.get("/", async (req, res) => {
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

app.post("/", async (req, res) => {
  try {
    const passwords = req.body;
    const insertedpass = await collection.insertOne(passwords);
    res.json(insertedpass);
  } catch (err) {
    res.status(500).json({ error: "Failed to insert password" });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await collection.deleteOne({ _id: new ObjectId(id) });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete password" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Backend running on http://localhost:${port}`);
});
