import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import TaskContainer from './TaskContainer';
import TaskForm from './TaskForm';
import useTasks from '../../hooks/useTasks';
import usePopulateStore from '../../hooks/usePopulateStore';

const useStyles = makeStyles({
  listContainer: {
    padding: '1rem',
    maxWidth: '600px',
    margin: 'auto'
  },
  textCentered: {
    textAlign: 'center'
  }
});

const TodoList: React.FC = () => {
  const classes = useStyles();
  const loaded = usePopulateStore();

  const tasks = useTasks();

  return (
    <Paper className={classes.listContainer}>
      <Typography variant="h3" className={classes.textCentered} color="primary">
        To-do List
      </Typography>
      <TaskForm />

      {tasks.length > 0 ? (
        <TaskContainer tasks={tasks} />
      ) : (
        <Typography className={classes.textCentered}>
          {!loaded ? 'Loading...' : 'No tasks'}
        </Typography>
      )}
    </Paper>
  );
};

export default TodoList;
