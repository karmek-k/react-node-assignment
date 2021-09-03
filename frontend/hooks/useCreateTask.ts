import { useAppDispatch } from '../hooks/redux';
import { actions } from '../redux/slices/taskSlice';
import { TaskEntry } from '../interfaces/Task';

const useCreateTask = () => {
  const dispatch = useAppDispatch();

  return (task: TaskEntry) => {
    dispatch(actions.add(task));
  };
};

export default useCreateTask;
