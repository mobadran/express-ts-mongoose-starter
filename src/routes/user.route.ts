// src/routes/userRoutes.ts
import { Router, Request, Response } from 'express';
import { getAllUsers } from '@/controllers/user.controller';

const router = Router();

// GET all users
router.get('/', getAllUsers);

export default router;
