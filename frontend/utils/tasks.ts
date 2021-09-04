import { Task } from '../interfaces/Task';

// TODO: this is not the best implementation
export const undoneFirst = (array: Task[]) => {
  const done = array.filter(task => task.done);
  const undone = array.filter(task => !task.done);

  const result = undone;
  result.push(...done);

  return result;
};
