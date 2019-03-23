import React from 'react';
import uaParser from 'useragent-parser-js';
import { MobileIndex } from '#components/mobile/base/Index';
import { PcIndex } from '#components/pc/base/Index';

export default class extends React.Component {
  /**
   * csr 로 userAgent 확인
   * @returns {*}
   */
  render() {
    const userAgent = navigator.userAgent;
    const ua = uaParser.parse(userAgent);
    console.log(userAgent);

    let layout;

    ua.isMobile ? (layout = <MobileIndex />) : (layout = <PcIndex />);

    return layout;
  }
}
