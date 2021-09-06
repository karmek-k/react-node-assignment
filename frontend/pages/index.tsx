import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage
} from 'next';
import Head from 'next/head';
import TodoList from '../components/index/TodoList';
import taskStore from '../redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import orange from '../theme/orange';

const Home: NextPage = ({
  page
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <ReduxProvider store={taskStore}>
      <ThemeProvider theme={orange}>
        <Head>
          <title>To-do List</title>
        </Head>
        <TodoList page={page} />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return { props: { page: query.page ?? 1 } };
};

export default Home;
