import express from 'express';
import cors from 'cors';
import TaskRouter from './routes/task';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/task', TaskRouter);

export default app;
