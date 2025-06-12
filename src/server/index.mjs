import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

// Log environment variables (excluding sensitive data)
console.log('Environment Check:');
console.log('MONGODB_DB:', process.env.MONGODB_DB);
console.log('PORT:', process.env.PORT);
console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('Please add your MongoDB URI to .env');
}

const client = new MongoClient(uri);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../dist')));
}

// Test MongoDB connection
async function testConnection() {
  try {
    await client.connect();
    console.log('Successfully connected to MongoDB.');
    const db = client.db(process.env.MONGODB_DB);
    await db.command({ ping: 1 });
    console.log('Database connection test successful.');
  } catch (error) {
    console.error('MongoDB connection test failed:', error);
  }
}

// Run connection test
testConnection();

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, mobile, budget, message } = req.body;

    // Validate required fields
    if (!name || !email || !mobile || !budget || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Connect to MongoDB
    await client.connect();
    const db = client.db(process.env.MONGODB_DB);

    // Insert the contact form submission
    const result = await db.collection('contacts').insertOne({
      name,
      email,
      mobile,
      budget,
      message,
      createdAt: new Date(),
    });

    return res.status(200).json({ 
      message: 'Contact form submitted successfully',
      id: result.insertedId 
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return res.status(500).json({ message: 'Error submitting contact form' });
  }
});

// Get all contacts endpoint
app.get('/api/contacts', async (req, res) => {
  try {
    // Simple auth check - in production use proper JWT
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== 'Bearer admin') {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    await client.connect();
    const db = client.db(process.env.MONGODB_DB);
    
    const contacts = await db.collection('contacts')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return res.status(500).json({ message: 'Error fetching contacts' });
  }
});

// Serve index.html for all other routes in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 