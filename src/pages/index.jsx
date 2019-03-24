import React from 'react';

import uaParser from 'useragent-parser-js';

import { MobileIndex } from '#components/mobile/base/Index';
import { PcIndex } from '#components/pc/base/Index';

/**
 * '/' 경로 userAgent 로 PC/MOBILE 분기
 */
export default class extends React.Component {

  state = {
    ua : null
  }

  componentDidMount() {
    const userAgent = navigator.userAgent;
    const ua = uaParser.parse(userAgent);
    this.setState({ua,userAgent})
  }

  render() {

    // console.log('ua',this.state.ua);

    let layout;

    this.state.ua ?
      this.state.ua.isMobile ? (layout = <MobileIndex isMobile={true}/>) : (layout = <PcIndex isMobile={false} />)
      : layout = null

    return layout;
  }
}
