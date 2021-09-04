import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import TaskRouter from './routes/task';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/task', TaskRouter);

export default app;
