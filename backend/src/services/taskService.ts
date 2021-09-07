import Task from '../models/Task';

class TaskService {
  async list(page: number = 1, itemsPerPage: number = 10) {
    const skip = Math.max(page - 1, 0) * itemsPerPage;

    return await Task.findAndCount({
      order: { id: 'ASC' },
      take: itemsPerPage,
      skip
    });
  }

  async listDone() {
    return await Task.find({ where: { done: true } });
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

  async toggleDone(id: number) {
    const task = await Task.findOne(id);

    if (!task) {
      throw new Error('task not found');
    }

    task.done = !task.done;
    return await task.save();
  }

  async deleteAll() {
    await Task.clear();
  }

  async addMany(names: string[]) {
    const tasks = names.map(name => {
      const task = new Task();
      task.name = name;
      return task;
    });

    return await Task.save(tasks);
  }
}

export default new TaskService();
