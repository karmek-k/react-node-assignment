import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import TaskContainer from './TaskContainer';
import { useAppSelector } from '../../hooks/redux';
import TaskForm from './TaskForm';

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
  const tasks = useAppSelector(state => state.task.tasks);

  return (
    <Paper className={classes.listContainer}>
      <Typography variant="h3" className={classes.textCentered}>
        To-do List
      </Typography>
      <TaskContainer tasks={tasks} />
      <TaskForm />
    </Paper>
  );
};

export default TodoList;
