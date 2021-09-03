import { Button, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import useDeleteTask from '../../hooks/useDeleteTask';
import { Task } from '../../interfaces/Task';

interface Props {
  task: Task;
}

const TaskComponent: React.FC<Props> = ({ task }) => {
  const deleteTask = useDeleteTask();

  return (
    <ListItem>
      <ListItemText primary={task.name} />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </Button>
    </ListItem>
  );
};

export default TaskComponent;
