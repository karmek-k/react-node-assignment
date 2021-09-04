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

router.put('/:id', async (req, res) => {
  const { id, done } = req.body;

  const task = await Task.findOne(id);

  if (!task) {
    return res.sendStatus(404);
  }

  task.done = done;
  await task.save();

  return res.send({ task });
});

export default router;
