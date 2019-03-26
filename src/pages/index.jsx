import React from 'react'

import uaParser from 'useragent-parser-js'

import MobileIndex from '#pages/mobile/index'
import { PcIndex } from '#pages/pc/index'

/**
 * '/' 경로 userAgent 로 PC/MOBILE 분기
 */
export default class extends React.Component {
  state = {
    ua: null,
  }

  componentDidMount() {
    const userAgent = navigator.userAgent
    const ua = uaParser.parse(userAgent)
    this.setState({ ua, userAgent })
  }

  render() {
    // console.log('ua',this.state.ua);

    let layout

    this.state.ua
      ? this.state.ua.isMobile
        ? (layout = <MobileIndex isMobile={true} />)
        : (layout = <PcIndex isMobile={false} />)
      : (layout = null)

    return layout
  }
}
