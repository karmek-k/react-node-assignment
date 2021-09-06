import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  centered: {
    display: 'flex',
    justifyContent: 'center'
  }
});

interface Props {
  page: number;
  pageCount: number;
}

const TodoListPagination: React.FC<Props> = ({ page, pageCount }) => {
  const classes = useStyles();

  if (pageCount <= 1) {
    return null;
  }

  return (
    <Pagination count={pageCount} page={page} className={classes.centered} />
  );
};

export default TodoListPagination;
