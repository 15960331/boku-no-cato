import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Grid } from '@mui/material';

import { Header } from 'components/Header';
import 'styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boku no Cato</title>
      </Head>

      <Grid
        bgcolor="#636C90"
        height="100vh"
        width="100vw"
        gridTemplateRows="80px auto"
      >
        <Grid p={1}>
          <Header />
        </Grid>

        <Grid textAlign="center">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Grid>
      </Grid>
    </>
  );
}
