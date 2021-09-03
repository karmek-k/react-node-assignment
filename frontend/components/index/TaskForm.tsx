import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

const TaskForm: React.FC = () => {
  const [taskName, setTaskName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: save to the database
    console.log(taskName);

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
