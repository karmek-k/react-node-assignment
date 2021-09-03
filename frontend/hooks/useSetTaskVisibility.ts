import TaskPickerOption from '../enums/TaskPickerOption';
import { actions } from '../redux/slices/taskSlice';
import { useAppDispatch } from './redux';

const useSetTaskVisibility = () => {
  const dispatch = useAppDispatch();

  return (option: TaskPickerOption) => {
    dispatch(actions.setVisibility(option));
  };
};

export default useSetTaskVisibility;
