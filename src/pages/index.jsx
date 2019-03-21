import React from 'react';

import { Layout } from 'components/Layout';

import { Button } from '@material-ui/core';

import main from 'styles/main.scss';
import ClassComponent from 'components/test/ClassComponent';

export default class extends React.Component {

  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <>
        <Layout title="HOME">
          <hr/>
          구글클라우드 + Nginx 웹서버 + http/2.0 + 리엑트
          <hr/>
          로딩시간은 최소한으로.....
          <hr/>
          주황이라........
          <hr/>
          채널 인터넷 막히면 큰일나요...<br/>번쩍번쩍 옛날사이트처럼 만들어질거에요.<br/>
          모두가 우와! 할수있게..
          <hr/>
          <div className="test1"> 페이지 style 1회성 클래스 주입 </div>
          <div className={main.test2}> 페이지 import scss 클래스 주입 </div>
          <div style={{ color: 'blue' }}> tag 인라인 스타일 주입 </div>
          <div>css 순서 : layout.scss -> page import scss -> 페이지 style</div>
          <hr/>
          <ClassComponent />
          <hr/>
          <Button variant="contained" color="primary" className=".test1"
            onClick={() => console.log('clicked!')}
          >
            Click Console log
          </Button>
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
