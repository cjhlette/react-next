import React from 'react';
import App, { Container } from 'next/app';
import '#styles/common/base.scss';
import uaParser from 'useragent-parser-js'

class MyApp extends App {

  state = {
    ua : null
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    const userAgent = navigator.userAgent;
    const ua = uaParser.parse(userAgent);
    console.log('userAgent',ua);

    // root agent 확인
    const html = document.getElementsByTagName('html')[0]
    if (ua.isDesktop ) html.classList.add('pc');
    if (ua.isMobile ) html.classList.add('mobile');
    if (ua.isTablet ) html.classList.add('tablet');
    if (ua.os) html.classList.add(ua.os.replace(/(\s*)/g,'').toLowerCase());
    if (ua.platform) html.classList.add(ua.platform.replace(/(\s*)/g,'').toLowerCase());
    if (ua.browser ) html.classList.add(ua.browser.toLowerCase());

    this.setState({ua,userAgent})
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
