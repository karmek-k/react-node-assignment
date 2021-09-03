import { useEffect, useState } from 'react';
import TaskPickerOption from '../enums/TaskPickerOption';
import { Task } from '../interfaces/Task';
import { useAppSelector } from './redux';
import useTaskVisibility from './useTaskVisibility';

const useTasks = () => {
  const allTasks = useAppSelector(state => state.task.tasks);
  const option = useTaskVisibility();

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    switch (option) {
      case TaskPickerOption.DONE:
        setTasks(allTasks.filter(task => task.done));

      case TaskPickerOption.UNDONE:
        setTasks(allTasks.filter(task => !task.done));

      default:
        setTasks(allTasks);
    }
  }, [option, allTasks]);

  return tasks;
};

export default useTasks;
