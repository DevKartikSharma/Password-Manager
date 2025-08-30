import dotenv from 'dotenv'
import express from 'express'
import { MongoClient } from 'mongodb'
import cors from 'cors';
import { ObjectId } from 'mongodb';

const app = express()
const port = 3000

dotenv.config()
app.use(cors());
app.use(express.json());


// Connection URL
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

// Database Name
const dbName = 'PassManager';
await client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);
const collection = db.collection('passwords');

app.get('/', async (req, res) => {
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
  res.send(findResult)

})
app.post('/', async (req, res) => {
  try{ 
    const passwords = req.body;
    let insertedpass = await collection.insertOne(passwords);
    res.send(insertedpass)
  }catch(err){
    res.status(500).json({ error: "Failed to insert password" });
  }
})

app.delete('/:id', async (req, res) => {
  try{

    const id = req.params.id
    await collection.deleteOne({ _id: new ObjectId(id) });
    res.send({success:true})
  }catch(err){
    res.status(500).json({ error: "Failed to delete password" });
  }
})

app.listen(port, () => {
  console.log(`Examle app listening on port ${port}`)
})