import Task from '../models/Task';

class TaskService {
  async list() {
    return await Task.find();
  }

  async retrieve(id: number) {
    return await Task.findOne(id);
  }

  async add(name: string) {
    const task = new Task();
    task.name = name;

    return await task.save();
  }

  async delete(id: number) {
    await Task.delete({ id });
  }

  async setDone(id: number, done: boolean) {
    const task = await Task.findOne(id);

    if (!task) {
      throw new Error('task not found');
    }

    task.done = done;
    return await task.save();
  }
}

export default new TaskService();
