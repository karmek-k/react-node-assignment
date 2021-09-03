import TaskPickerOption from '../enums/TaskPickerOption';
import { useAppSelector } from './redux';
import useTaskVisibility from './useTaskVisibility';

const useTasks = () => {
  const allTasks = useAppSelector(state => state.task.tasks);
  const option = useTaskVisibility();

  console.log(option);

  switch (option) {
    case TaskPickerOption.DONE:
      return allTasks.filter(task => task.done);

    case TaskPickerOption.UNDONE:
      return allTasks.filter(task => !task.done);

    default:
      return allTasks;
  }
};

export default useTasks;
