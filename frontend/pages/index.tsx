import type { NextPage } from 'next';
import Head from 'next/head';
import TodoList from '../components/index/TodoList';
import taskStore from '../redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import orange from '../theme/orange';

const Home: NextPage = () => {
  return (
    <ReduxProvider store={taskStore}>
      <ThemeProvider theme={orange}>
        <Head>
          <title>To-do List</title>
        </Head>
        <TodoList />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default Home;
