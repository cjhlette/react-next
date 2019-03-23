import React from 'react';

import { Layout } from '#components/mobile/Layout'

import main from '#styles/mobile/main.scss';

export class MobileMain extends React.Component {

  render() {
    return (
      <>
        <Layout title="HOME">
          <hr/>
          구글클라우드 + Nginx 웹서버 + http/2.0 + 리엑트
          <hr/>
          주황이라........
          <hr/>
          화면 개발 인터넷 막히면 큰일나요...
          <hr/>
          nodejs / npm 사용 가능해야 합니다.
          리엑트는 gradle, maven 같이 npm 패키지 매니저 기반 개발입니다.
          <hr/>
          <div className="test1"> 페이지 style 1회성 클래스 주입</div>
          <div className={main.test2}> 페이지 import scss 클래스 주입</div>
          <div style={{ color: 'blue' }}> tag 인라인 스타일 주입</div>
          <div>css 순서 : layout.scss -> page import scss -> 페이지 style</div>
          <hr/>

          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
        </Layout>
        {/* 페이지 style class 주입 예시 (상단 헤더에 scss 파일들 로드 아래 들어갑니다.) */}
        <style jsx global>{`
          body {
          background-color: #f7f7f7;
          }
          hr {
          background:#eee;
          }
          .test1 {
          color:green;
          }
        `}</style>
      </>
    );
  }
};

export default MobileMain;
