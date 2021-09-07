import useApiList from './api/useApiList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/slices/taskSlice';
import { listDoneTasks } from '../resources/task';

const usePopulateStore = (page: number = 1) => {
  const { tasks, count } = useApiList(page);
  const dispatch = useDispatch();
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    if (count != null && tasks && !done) {
      setDone(true);

      dispatch(actions.setCount(count));
      tasks.forEach(task => dispatch(actions.addFromApi(task)));

      listDoneTasks().then(tasks => dispatch(actions.setDoneTasks(tasks)));
    }
  }, [tasks, done, dispatch, count]);

  return done;
};

export default usePopulateStore;
