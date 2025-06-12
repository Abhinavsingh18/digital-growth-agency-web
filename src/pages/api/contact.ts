import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, mobile, budget, message } = req.body;

    // Validate required fields
    if (!name || !email || !mobile || !budget || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Connect to MongoDB
    const client = await clientPromise;
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
} 