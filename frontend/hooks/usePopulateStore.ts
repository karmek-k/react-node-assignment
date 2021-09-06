import useApiList from './api/useApiList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/slices/taskSlice';

const usePopulateStore = (page: number = 1) => {
  const tasks = useApiList(page);
  const dispatch = useDispatch();
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    if (tasks && !done) {
      setDone(true);
      tasks.forEach(task => dispatch(actions.addFromApi(task)));
    }
  }, [tasks, done, dispatch]);

  return done;
};

export default usePopulateStore;
