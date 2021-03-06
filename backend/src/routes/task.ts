import { Router } from 'express';
import randomService from '../services/randomService';
import taskService from '../services/taskService';

const router = Router();

router.get('/', async (req, res) => {
  const page = Number.parseInt((req.query.page as string) ?? 1);

  const [tasks, count] = await taskService.list(page);

  return res.send({
    tasks,
    count
  });
});

router.post('/', async (req, res) => {
  const { name } = req.body;

  return res.status(201).send({
    task: await taskService.add(name)
  });
});

router.put('/:id', async (req, res) => {
  const id = Number.parseInt(req.params.id);

  try {
    return res.send({
      task: await taskService.toggleDone(id)
    });
  } catch (e) {
    return res.sendStatus(404);
  }
});

router.delete('/:id', async (req, res) => {
  const id = Number.parseInt(req.params.id);

  taskService.delete(id);

  return res.sendStatus(204);
});

router.post('/generate', async (req, res) => {
  const { count } = req.body;
  if (!count) {
    return res.sendStatus(400);
  }

  await taskService.deleteAll();

  const names = randomService.randomStrings(count);
  await taskService.addMany(names);

  return res.sendStatus(201);
});

router.get('/done', async (req, res) => {
  return res.send({ tasks: await taskService.listDone() });
});

export default router;
