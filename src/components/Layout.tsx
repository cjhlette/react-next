import * as React from 'react';
import * as styles from '@styles/main.scss';
import Head from 'next/head';

import Header from '@components/Header';
import Footer from '@components/Footer';
import { initGA, logPageView } from '@lib/analytics/analytics';

type Props = {
  title: string;
  children: any;
};

declare global {
  interface Window {
    GA_INITIALIZED: any;
  }
}

export class Layout extends React.Component<Props> {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    return (
      <>
        <Head>
          <title>{this.props.title}</title>
        </Head>

        <Header />

        <article className={styles.container}>{this.props.children}</article>

        <Footer />
      </>
    );
  }
}
