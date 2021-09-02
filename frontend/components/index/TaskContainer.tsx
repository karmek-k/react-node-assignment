import { List } from '@material-ui/core';
import React from 'react';
import { Task } from '../../interfaces/Task';
import TaskComponent from './TaskComponent';

interface Props {
  tasks: Task[];
}

const TaskContainer: React.FC<Props> = ({ tasks }) => {
  const taskComponents = tasks.map((task, i) => {
    return <TaskComponent task={task} key={i} />;
  });

  return <List>{taskComponents}</List>;
};

export default TaskContainer;
