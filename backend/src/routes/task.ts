import { Router } from 'express';
import Task from '../models/Task';

const router = Router();

router.get('/', async (req, res) => {
  const tasks = await Task.find();

  return res.send({ tasks });
});

router.post('/', async (req, res) => {
  const { name } = req.body;

  const task = new Task();
  task.name = name;

  await task.save();

  return res.status(201).send({ task });
});

export default router;
