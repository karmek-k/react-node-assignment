import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import TaskContainer from './TaskContainer';
import TaskForm from './TaskForm';
import useTasks from '../../hooks/useTasks';
import TaskPicker from './TaskPicker';
import useTaskVisibility from '../../hooks/useTaskVisibility';

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

  // Why useTaskVisibility:
  // I thought that I was supposed to make a radio button group
  // that would display {all, done, undone} tasks
  const tasks = useTasks(useTaskVisibility());

  return (
    <Paper className={classes.listContainer}>
      <Typography variant="h3" className={classes.textCentered}>
        To-do List
      </Typography>
      <TaskForm />

      {/* 
        I've kinda misunderstood the last point,
        but I don't really want to delete this component.
      */}
      {/* <TaskPicker /> */}

      {tasks.length > 0 ? (
        <TaskContainer tasks={tasks} />
      ) : (
        <Typography className={classes.textCentered}>No tasks</Typography>
      )}
    </Paper>
  );
};

export default TodoList;
