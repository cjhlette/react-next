import * as React from 'react';
import { Layout } from '@components/Layout';
import Link from 'next/link';
import { withRouter } from 'next/router';

class MyLink extends React.Component {
  componentDidMount() {
    // @ts-ignore
    const { router } = this.props;
    router.prefetch('/calculation/car');
  }

  render() {
    // @ts-ignore
    const { router } = this.props;

    return (
      <Layout title="상품몰 !!">
        <pre>상품몰 메인</pre>
        <ul>
          <li>
            <a onClick={() => router.push('/calculation/car')}>자동차 산출가입</a>
          </li>
          <li>
            <Link href="/calculation/travleOverseas">
              <a>해외여행 산출가입</a>
            </Link>
          </li>
        </ul>
      </Layout>
    );
  }
}

export default withRouter(MyLink);

/*
export default () => (
  <Layout title="상품몰 !!">
    <pre>상품몰 메인</pre>
    <ul>
      <li>
        <Link href="/calculation/car">
          <a>자동차 산출가입</a>
        </Link>
      </li>
      <li>
        <Link href="/calculation/travleOverseas">
          <a>해외여행 산출가입</a>
        </Link>
      </li>
    </ul>
  </Layout>
);
*/
