import { useEffect, useState } from 'react';
import { Task } from '../../interfaces/Task';
import { listTasks } from '../../resources/task';

const useApiList = (page: number) => {
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    listTasks(page).then(res => {
      setTasks(res.tasks);
      setCount(res.count);
    });
  }, [page]);

  return { tasks, count };
};

export default useApiList;
