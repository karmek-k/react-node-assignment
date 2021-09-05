import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import useApiCreate from '../../hooks/api/useApiCreate';

const useStyles = makeStyles({
  taskForm: {
    display: 'flex',
    flexDirection: 'column'
  },
  taskFormItem: {
    margin: '0.75rem 0'
  }
});

const TaskForm: React.FC = () => {
  const [taskName, setTaskName] = useState<string>('');
  const createTask = useApiCreate();
  const classes = useStyles();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!taskName) {
      return;
    }

    createTask({ name: taskName });
    setTaskName('');
  };

  return (
    <form method="POST" onSubmit={handleSubmit} className={classes.taskForm}>
      <TextField
        className={classes.taskFormItem}
        label="Task name"
        name="name"
        variant="outlined"
        onChange={e => setTaskName(e.target.value)}
        value={taskName}
      />
      <Button
        className={classes.taskFormItem}
        variant="contained"
        type="submit"
        color="primary"
        size="large"
      >
        Add task
      </Button>
    </form>
  );
};

export default TaskForm;
