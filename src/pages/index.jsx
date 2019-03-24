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

    // console.log('ua',this.state.ua);

    let layout;

    this.state.ua ?
      this.state.ua.isMobile ? (layout = <MobileIndex isMobile={true}/>) : (layout = <PcIndex isMobile={false} />)
      : layout = null

    return layout;
  }
}
