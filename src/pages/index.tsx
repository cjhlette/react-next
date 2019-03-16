import React from 'react';
import { Layout } from '@components/Layout';
import TemporaryDrawer from '@components/TemporaryDrawer';
import * as main from '@styles/main.scss';

export default class extends React.Component {
  render() {
    return (
      <>
        <Layout title="HOME">
          <hr/>
          구글클라우드 + Nginx 웹서버 + http/2.0 + 리엑트
          <hr/>
          Drawer 테스트
          <TemporaryDrawer/>
          <hr/>
          <div className="test1"> 페이지 style 1회성 클래스 주입 </div>
          <div className={main.test2}> 페이지 scss 1회성 클래스 주입 </div>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
        </Layout>
        {/* 페이지 style class 주입 예시 (상단 헤더에 scss 파일들 로드 아래 들어갑니다.) */}
        <style jsx>{`
        hr {
          height: 5px;
        }
        .test1 {
          color:green;
        }
      `}</style>
      </>
    );
  }
}
