import React from 'react';

import { Layout } from '#components/pc/Layout'

export class PcMain extends React.Component {

  render() {
    return (
      <>
        <Layout title="Main">
          PC Main
        </Layout>
        {/* 페이지 style class 주입 예시 (상단 헤더에 scss 파일들 로드 아래 들어갑니다.) */}
        <style jsx global>{`
          .test1 {
            color:green;
          }
        `}</style>
      </>
    );
  }
};

export default PcMain;
