import { Button, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import useDeleteTask from '../../hooks/useDeleteTask';
import useToggleDone from '../../hooks/useToggleDone';
import { Task } from '../../interfaces/Task';

interface Props {
  task: Task;
}

const TaskComponent: React.FC<Props> = ({ task }) => {
  const deleteTask = useDeleteTask();
  const toggleDone = useToggleDone();

  return (
    <ListItem>
      <ListItemText
        primary={task.name}
        secondary={task.done ? 'Done' : 'Undone'}
      />
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => toggleDone(task.id)}
      >
        Toggle done
      </Button>
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
