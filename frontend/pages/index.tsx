import type { NextPage } from 'next';
import { Typography } from '@material-ui/core';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>To-do List</title>
      </Head>
      <Typography variant="h1">Hello, world!</Typography>
    </>
  );
};

export default Home;
