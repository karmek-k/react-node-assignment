import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

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

  return (
    <Paper className={classes.listContainer}>
      <Typography variant="h3" className={classes.textCentered}>
        To-do List
      </Typography>
    </Paper>
  );
};

export default TodoList;
