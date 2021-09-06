import { useEffect, useState } from 'react';
import { Task } from '../../interfaces/Task';
import { listTasks } from '../../resources/task';

const useApiList = (page: number) => {
  const [tasks, setTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    listTasks(page).then(res => setTasks(res.tasks));
  }, [page]);

  return tasks;
};

export default useApiList;
