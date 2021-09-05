import { useEffect, useState } from 'react';
import { Task } from '../../interfaces/Task';
import { listTasks } from '../../resources/task';

const useApiList = () => {
  const [tasks, setTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    listTasks().then(setTasks);
  }, []);

  return tasks;
};

export default useApiList;
