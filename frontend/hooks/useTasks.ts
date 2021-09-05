import { undoneFirst } from '../utils/tasks';
import { useAppSelector } from './redux';

const useTasks = () => {
  const allTasks = useAppSelector(state => state.task.tasks);

  return undoneFirst(allTasks);
};

export default useTasks;
