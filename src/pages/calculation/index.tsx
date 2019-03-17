import React from 'react';
import { Layout } from '@components/Layout';
import Link from 'next/link';
import { withRouter, SingletonRouter } from 'next/router';

interface Props {
  router?: SingletonRouter;
}

class MyLink extends React.Component<Props> {
  componentDidMount() {
    const { router } = this.props;
    router.prefetch('/calculation/car');
  }

  render() {
    const { router } = this.props;

    return (
      <Layout title="산출가입 !!">
        <pre>산출가입 메인</pre>
        <ul>
          <li>
            <a onClick={() => router.push('/calculation/car')}>산출가입_1</a>
          </li>
          <li>
            <Link href="/calculation/travleOverseas">
              <a>산출가입_2</a>
            </Link>
          </li>
        </ul>
      </Layout>
    );
  }
}

export default withRouter(MyLink);
