import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { GoogleGenAI } from "@google/genai";
dotenv.config();


const app = express();
const port = 3000;

const GEMINI_API_KEY = process.env.API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

// Middleware to parse JSON requests
app.use(express.json());
main();


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});