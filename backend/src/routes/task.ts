import { Router } from 'express';
import taskService from '../services/taskService';

const router = Router();

router.get('/', async (req, res) => {
  return res.send({
    tasks: await taskService.list()
  });
});

router.post('/', async (req, res) => {
  const { name } = req.body;

  return res.status(201).send({
    task: await taskService.add(name)
  });
});

router.put('/', async (req, res) => {
  const { id, done } = req.body;

  try {
    return res.send({
      task: await taskService.setDone(id, done)
    });
  } catch (e) {
    return res.sendStatus(404);
  }
});

router.delete('/', async (req, res) => {
  const { id } = req.body;

  taskService.delete(id);

  return res.sendStatus(204);
});

export default router;
