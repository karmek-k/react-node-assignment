import { useEffect, useState } from 'react';
import { listTasks } from '../resources/task';
import useCreateTask from './useCreateTask';

const usePopulateStore = () => {
  const [done, setDone] = useState<boolean>(false);
  const createTask = useCreateTask();

  useEffect(() => {
    if (!done) {
      listTasks().then(tasks => {
        setDone(true);
        tasks.forEach(createTask);
      });
    }
  });

  return done;
};

export default usePopulateStore;
