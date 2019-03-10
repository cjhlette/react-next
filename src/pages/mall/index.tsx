import { Layout } from "../../components/Layout";
import Link from 'next/link';

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
