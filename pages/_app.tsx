import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Box } from '@mui/material';

import { Header } from 'components/Header';
import 'styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boku no Cato</title>
      </Head>

      <Box
        display="grid"
        bgcolor="#636C90"
        height="100vh"
        width="100%"
        gridTemplateRows="120px auto"
      >
        <Box p={1} height="100%">
          <Header />
        </Box>

        <Box p={1} height="100%">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Box>
      </Box>
    </>
  );
}
