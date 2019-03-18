import React from 'react';
import Link from 'next/link';

import { Layout } from '@components/Layout';

export default () => (
  <Layout title="상품몰 !!">
    <pre>상품몰 메인</pre>
    <ul>
      <li>
        <Link href="/mall/car">
          <a>상품_1</a>
        </Link>
      </li>
      <li>
        <Link href="/mall/travleOverseas">
          <a>상품_2</a>
        </Link>
      </li>
    </ul>
  </Layout>
);
