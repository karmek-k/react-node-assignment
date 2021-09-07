import React from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
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
    <Pagination
      count={pageCount}
      page={page}
      className={classes.centered}
      renderItem={item => {
        return (
          <a href={item.page ? `/?page=${item.page}` : '#'}>
            <PaginationItem {...item} />
          </a>
        );
      }}
    />
  );
};

export default TodoListPagination;
