import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import getPageContext from '../getPageContext'
import { initializeStore } from '../stores/store'
import { Provider } from 'mobx-react'

import '#styles/common/Base.scss'
import uaParser from 'useragent-parser-js'

class MyApp extends App {
  state = {
    ua: null,
  }

  static async getInitialProps(appContext) {
    // Get or Create the store with `undefined` as initialState
    // This allows you to set a custom default initialState
    const mobxStore = initializeStore()
    // Provide the store to getInitialProps of pages
    appContext.ctx.mobxStore = mobxStore

    let appProps = await App.getInitialProps(appContext)

    return {
      ...appProps,
      initialMobxState: mobxStore,
    }
  }

  constructor(props) {
    super(props)
    const isServer = !process.browser
    this.mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState)

    this.pageContext = getPageContext()
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
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>My page</title>
        </Head>
        {/* Wrap every page in Styles and Theme providers */}
        <StylesProvider
          generateClassName={this.pageContext.generateClassName}
          sheetsRegistry={this.pageContext.sheetsRegistry}
          sheetsManager={this.pageContext.sheetsManager}
        >
          {/* ThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <ThemeProvider theme={this.pageContext.theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            {/*<CssBaseline />*/}
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}
            <Provider store={this.mobxStore}>
              <Component pageContext={this.pageContext} {...pageProps} />
            </Provider>
          </ThemeProvider>
        </StylesProvider>
      </Container>
    )
  }
}

export default MyApp
