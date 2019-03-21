import React from 'react';
import Head from 'next/head';

import layout from 'styles/layout.scss';

import Header from 'components/Header';
import Footer from 'components/Footer';
import FooterFloating from 'components/FooterFloating';

import { initGA, logPageView } from 'lib/analytics/analytics';

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

        <Header title={this.props.title}/>

        <article className={layout.base_main}>{this.props.children}</article>

        <Footer />

        <FooterFloating />
      </>
    );
  }
}
