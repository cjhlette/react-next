import * as React from 'react';
import * as layout from '@styles/layout.scss';
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

        <article className={layout.base_main}>{this.props.children}</article>

        <Footer />

        <article className={layout.floating_menu}>
          <button type="button" className="ico1">
            <span>버튼1</span>
          </button>
          <button type="button" className="ico2">
            <span>버튼2</span>
          </button>
          <button type="button" className="ico3">
            <span>버튼3</span>
          </button>
          <button type="button" className="ico4">
            <span>버튼4</span>
          </button>
        </article>
      </>
    );
  }
}
