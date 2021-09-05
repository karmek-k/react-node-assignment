import useCreateTask from './useCreateTask';
import useApiList from './api/useApiList';
import { useEffect, useState } from 'react';

const usePopulateStore = () => {
  const tasks = useApiList();
  const createTask = useCreateTask();
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    if (tasks && !done) {
      setDone(true);
      tasks.forEach(createTask);
    }
  }, [tasks, createTask, done]);

  return done;
};

export default usePopulateStore;
