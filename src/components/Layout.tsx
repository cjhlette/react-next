import * as React from 'react';
import * as styles from '../styles/main.scss';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

type Props = {
  title: string;
  children: any;
};

export const Layout = (props: Props) => (
  <>
    <Head>
      <title>{props.title}</title>
    </Head>

    <Header/>

    <article className={styles.container}>{props.children}</article>

    <Footer/>
  </>
);
