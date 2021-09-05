import { toggleDoneTask } from '../../resources/task';
import useToggleDone from '../useToggleDone';

const useApiCreate = () => {
  const toggleDoneInStore = useToggleDone();

  return (id: number) => {
    toggleDoneTask(id).then(task => toggleDoneInStore(task.id));
  };
};

export default useApiCreate;
