import React from 'react';
import { Layout } from '@components/Layout';
import TemporaryDrawer from '@components/TemporaryDrawer';

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
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
          contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>contents<br/>
        </Layout>
      </>
    );
  }
}
