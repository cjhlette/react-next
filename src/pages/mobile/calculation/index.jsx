import React from 'react';
import { Layout } from "#components/mobile/base/Layout";
import Link from 'next/link';
import { withRouter, SingletonRouter } from 'next/router';

class MyLink extends React.Component{
  componentDidMount() {
    const { router } = this.props;
    router.prefetch('/mobile/calculation/car');
  }

  render() {
    const { router } = this.props;
    return (
      <Layout title="산출가입 !!">
        <pre>산출가입 메인</pre>
        <ul>
          <li>
            <a onClick={() => router.push('/mobile/calculation/car')}>산출가입_1</a>
          </li>
          <li>
            <Link href="/mobile/calculation/travleOverseas">
              <a>산출가입_2</a>
            </Link>
          </li>
        </ul>
      </Layout>
    );
  }
}

export default withRouter(MyLink);
