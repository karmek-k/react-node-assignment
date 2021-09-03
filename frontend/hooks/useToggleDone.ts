import { actions } from '../redux/slices/taskSlice';
import { useAppDispatch } from './redux';

const useToggleDone = () => {
  const dispatch = useAppDispatch();

  return (id: number) => {
    dispatch(actions.toggleDone(id));
  };
};

export default useToggleDone;
