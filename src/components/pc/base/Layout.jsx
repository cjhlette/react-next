import React from 'react';
import Head from 'next/head';

import LayoutStyles from '#styles/pc/base/Layout.scss';

import { Header } from '#components/pc/base/Header';
import { Footer } from '#components/pc/base/Footer';

import { initGA, logPageView } from '#lib/analytics/analytics';

export class Layout extends React.Component {
  componentDidMount() {
    // PC용 껍데기 class 주입
    document.getElementById('__next').classList.add('PcWrapper');

    // google ga script
    document.title = this.props.title
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

        <Header title={this.props.title} />

        <article className={LayoutStyles.main_conent}>
          {this.props.children}
        </article>

        <Footer />
      </>
    );
  }
}
