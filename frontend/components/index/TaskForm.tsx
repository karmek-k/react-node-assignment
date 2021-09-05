import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import useApiCreate from '../../hooks/api/useApiCreate';

const TaskForm: React.FC = () => {
  const [taskName, setTaskName] = useState<string>('');
  const createTask = useApiCreate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!taskName) {
      return;
    }

    createTask({ name: taskName });
    setTaskName('');
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <TextField
        label="Task name"
        name="name"
        onChange={e => setTaskName(e.target.value)}
        value={taskName}
      />
      <Button variant="contained" type="submit" color="primary">
        Add task
      </Button>
    </form>
  );
};

export default TaskForm;
