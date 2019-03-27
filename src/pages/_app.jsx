import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../getPageContext';

import '#styles/common/Base.scss'
import uaParser from 'useragent-parser-js'

class MyApp extends App {

  state = {
    ua: null,
  }

  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    const userAgent = navigator.userAgent
    const ua = uaParser.parse(userAgent)
    console.log('userAgent', ua)

    // root agent 확인
    const html = document.getElementsByTagName('html')[0]
    if (ua.isDesktop) html.classList.add('pc')
    if (ua.isMobile) html.classList.add('mobile')
    if (ua.isTablet) html.classList.add('tablet')
    if (ua.os) html.classList.add(ua.os.replace(/(\s*)/g, '').toLowerCase())
    if (ua.platform) html.classList.add(ua.platform.replace(/(\s*)/g, '').toLowerCase())
    if (ua.browser) html.classList.add(ua.browser.toLowerCase())

    this.setState({ ua, userAgent })

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    )
  }
}

export default MyApp
