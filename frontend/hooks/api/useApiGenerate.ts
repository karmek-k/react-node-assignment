import { generateTasks } from '../../resources/task';
import useCreateTask from '../useCreateTask';

const useApiGenerate = () => {
  const createTaskInStore = useCreateTask();

  return (count: number) => {
    generateTasks(count).then(tasks => {
      tasks.forEach(createTaskInStore);
    });
  };
};

export default useApiGenerate;
