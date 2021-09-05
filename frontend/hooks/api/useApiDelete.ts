import { deleteTask } from '../../resources/task';
import useDeleteTask from '../useDeleteTask';

const useApiDelete = () => {
  const deleteTaskInStore = useDeleteTask();

  return (id: number) => {
    deleteTask(id).then(() => deleteTaskInStore(id));
  };
};

export default useApiDelete;
