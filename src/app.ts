// src/app.ts
import express, { Application } from 'express';
import dotenv from 'dotenv';
import userRoutes from '@/routes/user.route';

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware (optional)
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

export default app;
