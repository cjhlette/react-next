import React from 'react';
import Head from 'next/head';

import layout from '#styles/pc/layout.scss';

import { initGA, logPageView } from '#lib/analytics/analytics';

export class Layout extends React.Component {
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

        <article className={layout.base_main}>{this.props.children}</article>

      </>
    );
  }
}
