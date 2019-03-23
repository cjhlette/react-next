import React from 'react';

import { Layout } from '#components/pc/base/Layout'

export class PcIndex extends React.Component {

  render() {
    return (
      <>
        <Layout title="인덱스" side="Index">
          인덱스
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

export default PcIndex;
