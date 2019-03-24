import React from 'react';
import Head from 'next/head';

import LayoutStyles from '#styles/mobile/base/Layout.scss';

import { Header } from '#components/mobile/base/Header';
import { Footer } from '#components/mobile/base/Footer';

import { initGA, logPageView } from '#lib/analytics/analytics';
import FooterFloating from '#components/mobile/base/FooterFloating';

export class Layout extends React.Component {
  componentDidMount() {
    // 모바일용 껍데기 class 주입
    document.getElementById('__next').classList.add('MobileWrapper');

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
        <FooterFloating />
      </>
    );
  }
}
