import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Task } from '../../interfaces/Task';
import TaskContainer from './TaskContainer';

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

interface Props {
  tasks: Task[];
}

const TodoList: React.FC<Props> = ({ tasks }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.listContainer}>
      <Typography variant="h3" className={classes.textCentered}>
        To-do List
      </Typography>
      <TaskContainer tasks={tasks} />
    </Paper>
  );
};

export default TodoList;
