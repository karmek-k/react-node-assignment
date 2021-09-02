import type { NextPage } from 'next';
import Head from 'next/head';
import TodoList from '../components/index/TodoList';
import { Task } from '../interfaces/Task';

const Home: NextPage = () => {
  // TODO: replace with an API call
  const tasks: Task[] = [
    {
      name: 'done task',
      done: true
    },
    {
      name: 'undone task',
      done: false
    }
  ];

  return (
    <>
      <Head>
        <title>To-do List</title>
      </Head>
      <TodoList tasks={tasks} />
    </>
  );
};

export default Home;
