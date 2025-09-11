// src/server.ts
import mongoose from 'mongoose';
import app from '@/app';

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI!;

const startServer = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB connected');

    // Start Express server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
