import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import TaskRouter from './routes/task';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/task', TaskRouter);

export default app;
