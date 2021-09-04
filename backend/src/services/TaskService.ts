import Task from '../models/Task';

class TaskService {
  async add(task: Task) {
    await Task.save(task);
  }

  async delete(id: number) {
    await Task.delete({ id });
  }

  async setDone(id: number, done: boolean) {
    const task = await Task.findOne(id);

    if (!task) {
      return;
    }

    task.done = done;
    task.save();
  }
}

export default new TaskService();
