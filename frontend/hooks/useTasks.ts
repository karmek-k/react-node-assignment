import TaskPickerOption from '../enums/TaskPickerOption';
import { useAppSelector } from './redux';

const useTasks = (option?: TaskPickerOption) => {
  const tasks = useAppSelector(state => state.task.tasks);

  switch (option) {
    case TaskPickerOption.DONE:
      return tasks.filter(task => task.done);

    case TaskPickerOption.UNDONE:
      return tasks.filter(task => !task.done);

    default:
      return tasks;
  }
};

export default useTasks;
