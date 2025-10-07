import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables from .env if present
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/codearena';

// Middlewares
app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (_req, res) => {
  res.json({ status: 'ok', message: 'Express server is running' });
});

// Hello endpoint
app.get('/hello', (_req, res) => {
  res.json({ message: 'Hello CodeArena' });
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

async function start() {
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: process.env.MONGO_DB_NAME || 'codearena'
    });
    console.log('MongoDB connected');

    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();
