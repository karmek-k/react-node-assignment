import { actions } from '../redux/slices/taskSlice';
import { useAppDispatch } from './redux';

const useDeleteTask = () => {
  const dispatch = useAppDispatch();

  return (id: number) => {
    dispatch(actions.remove(id));
  };
};

export default useDeleteTask;
