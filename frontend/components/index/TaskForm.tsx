import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import useApiCreate from '../../hooks/api/useApiCreate';
import useApiGenerate from '../../hooks/api/useApiGenerate';

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
  const generateTasks = useApiGenerate();

  const generationCount = 3000;

  const handleGenerationClick = () => {
    if (confirm(`Do you really want to generate ${generationCount} tasks?`)) {
      generateTasks(generationCount);
    }
  };

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
      <Button
        className={classes.taskFormItem}
        variant="outlined"
        color="primary"
        onClick={handleGenerationClick}
      >
        Generate {generationCount} tasks
      </Button>
    </form>
  );
};

export default TaskForm;
