import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors
import { GoogleGenAI } from "@google/genai";
dotenv.config();

const app = express();
const port = 3000;

const GEMINI_API_KEY = process.env.API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for all origins (or specify your frontend origin)
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend's origin
}));

// Endpoint to handle text input and return AI-generated response
app.post('/api/generate', async (req, res) => {
  const { text } = req.body;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: text,
    });
    res.json({ generatedText: response.text });
    console.log('Generated content:', response.text);
  } catch (error) {
    console.error('Error generating content:', error.message);
    res.status(500).json({ error: 'Failed to generate content' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});