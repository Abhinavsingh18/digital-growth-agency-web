import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://127.0.0.1:5173', 'http://127.0.0.1:5174'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
  credentials: true
}));

// Logging middleware
app.use((_req, _res, next) => {
  console.log(`${new Date().toISOString()} - ${_req.method} ${_req.url}`);
  console.log('Headers:', _req.headers);
  console.log('Body:', _req.body);
  next();
});

app.use(express.json());

// Error handling middleware
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error', details: err.message });
});

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://abhinav2003singh16:abhinav2003singh16@hustle.jvf40dy.mongodb.net/contact_db?retryWrites=true&w=majority&appName=hustle';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  budget: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Health check route
app.get('/', (_req, res) => {
  res.json({ status: 'Server is running' });
});

// Routes
app.post('/contacts', async (req, res) => {
  console.log('Received POST request to /contacts');
  console.log('Request body:', req.body);
  
  try {
    const contact = new Contact(req.body);
    await contact.save();
    console.log('Contact saved successfully:', contact);
    res.status(201).json({ message: 'Contact form submitted successfully', contact });
  } catch (error: unknown) {
    console.error('Error saving contact:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    res.status(500).json({ error: 'Failed to submit contact form', details: errorMessage });
  }
});

// Get all contacts
app.get('/contacts', async (_req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

const PORT = Number(process.env.PORT) || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Server URL: http://localhost:${PORT}`);
}); 