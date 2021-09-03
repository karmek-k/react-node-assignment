import { useAppSelector } from './redux';

const useTaskVisibility = () => {
  return useAppSelector(state => state.task.visibility);
};

export default useTaskVisibility;
