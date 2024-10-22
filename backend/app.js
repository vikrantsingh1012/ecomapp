import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import cors from 'cors';

const url = 'mongodb://localhost:27017';
const dbName = "fullStack";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const connectdb = async () => {
    console.log("Connecting to MongoDB");
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(dbName);
    return db;
};

// User Registration
app.post('/SignUp', async (req, res) => {
    const { username, password } = req.body;
    const db = await connectdb();
    
    // Check if the user already exists
    const existingUser = await db.collection('users').findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists.' });
    }
    
    // Insert new user
    const result = await db.collection('users').insertOne({ username, password });
    res.status(201).json({ message: 'User created successfully', userId: result.insertedId });
});

// User Login
app.post('/Login', async (req, res) => {
    const { username, password } = req.body;
    const db = await connectdb();
    
    // Check if user exists and password matches
    const user = await db.collection('users').findOne({ username, password });
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password.' });
    }
    
    res.status(200).json({ message: `Welcome, ${username}!` });
});

// Fetch Products
app.get("/Products", async (req, res) => {
    const db = await connectdb();
    const result = await db.collection('products').find().toArray();
    res.send(result);
});

app.listen(port, () => {
    console.log(`Server is running on port - ${port}`);
});
