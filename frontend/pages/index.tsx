import type { NextPage } from 'next';
import Head from 'next/head';
import TodoList from '../components/TodoList';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>To-do List</title>
      </Head>
      <TodoList />
    </>
  );
};

export default Home;
