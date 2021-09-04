import { Router } from 'express';
import Task from '../models/Task';
import TaskService from '../services/TaskService';

const router = Router();

router.get('/', async (req, res) => {
  return res.send({
    tasks: await TaskService.list()
  });
});

router.post('/', async (req, res) => {
  const { name } = req.body;

  return res.status(201).send({
    task: await TaskService.add(name)
  });
});

router.put('/', async (req, res) => {
  const { id, done } = req.body;

  try {
    return res.send({
      task: await TaskService.setDone(id, done)
    });
  } catch (e) {
    return res.sendStatus(404);
  }
});

router.delete('/', async (req, res) => {
  const { id } = req.body;
});

export default router;
