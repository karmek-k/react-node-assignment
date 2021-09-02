import { ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { Task } from '../../interfaces/Task';

interface Props {
  task: Task;
}

const TaskComponent: React.FC<Props> = ({ task }) => {
  return (
    <ListItem>
      <ListItemText primary={task.name} />
    </ListItem>
  );
};

export default TaskComponent;
