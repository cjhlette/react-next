import React from 'react';

import { Layout } from '@components/Layout';
import TemporaryDrawer from '@components/TemporaryDrawer';

import main from '@styles/main.scss';
import ClassComponent from '@components/test/ClassComponent';
import Button from '../components/base/Button';

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
          <div className={main.test2}> 페이지 import scss 클래스 주입 </div>
          <div style={{ color: 'blue' }}> tag 인라인 스타일 주입 </div>
          <div>css 순서 : layout.scss -> page import scss -> 페이지 style</div>
          <hr/>
          <ClassComponent />
          <Button />
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
}
