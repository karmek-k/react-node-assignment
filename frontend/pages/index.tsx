import type { NextPage } from 'next';
import Head from 'next/head';
import TodoList from '../components/index/TodoList';
import taskStore from '../redux/store';
import { Provider as ReduxProvider } from 'react-redux';

const Home: NextPage = () => {
  return (
    <ReduxProvider store={taskStore}>
      <Head>
        <title>To-do List</title>
      </Head>
      <TodoList />
    </ReduxProvider>
  );
};

export default Home;
