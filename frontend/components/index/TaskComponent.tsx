import { Button, ListItem, ListItemText, Checkbox } from '@material-ui/core';
import React from 'react';
import useApiToggleDone from '../../hooks/api/useApiToggleDone';
import useDeleteTask from '../../hooks/useDeleteTask';
import { Task } from '../../interfaces/Task';

interface Props {
  task: Task;
}

const TaskComponent: React.FC<Props> = ({ task }) => {
  const deleteTask = useDeleteTask();
  const toggleDone = useApiToggleDone();

  const handleDelete = () => {
    if (confirm('Do you really want to delete this task?')) {
      deleteTask(task.id);
    }
  };

  return (
    <ListItem>
      <ListItemText
        primary={task.name}
        secondary={task.done ? 'Done' : 'Undone'}
      />
      <Checkbox
        checked={task.done}
        onChange={() => toggleDone(task.id)}
        inputProps={{ 'aria-label': 'toggle done' }}
      />
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Delete
      </Button>
    </ListItem>
  );
};

export default TaskComponent;
