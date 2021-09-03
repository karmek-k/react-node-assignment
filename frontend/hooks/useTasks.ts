import TaskPickerOption from '../enums/TaskPickerOption';
import { useAppSelector } from './redux';

const useTasks = (visibility?: TaskPickerOption) => {
  const allTasks = useAppSelector(state => state.task.tasks);

  switch (visibility) {
    case TaskPickerOption.DONE:
      return allTasks.filter(task => task.done);

    case TaskPickerOption.UNDONE:
      return allTasks.filter(task => !task.done);

    default:
      return allTasks;
  }
};

export default useTasks;
