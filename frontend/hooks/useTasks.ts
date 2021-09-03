import { useAppSelector } from './redux';

const useTasks = () => {
  return useAppSelector(state => state.task.tasks);
};

export default useTasks;
