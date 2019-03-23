import React from 'react';
import uaParser from 'useragent-parser-js';
import { MobileMain } from '#components/mobile/Main';
import { PcMain } from '#components/pc/Main';

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

    ua.isMobile ? (layout = <MobileMain />) : (layout = <PcMain />);

    return layout;
  }
}
