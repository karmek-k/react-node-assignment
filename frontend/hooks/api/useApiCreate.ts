import { TaskEntry } from '../../interfaces/Task';
import { createTask } from '../../resources/task';
import useCreateTask from '../useCreateTask';

const useApiCreate = () => {
  const createTaskInStore = useCreateTask();

  return (taskEntry: TaskEntry) => {
    createTask(taskEntry).then(createTaskInStore);
  };
};

export default useApiCreate;
