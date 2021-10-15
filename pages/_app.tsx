/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { Typography } from 'antd';

import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boku no Cato</title>
      </Head>

      <header>
        <Typography.Title>Boku no Cato</Typography.Title>
      </header>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
