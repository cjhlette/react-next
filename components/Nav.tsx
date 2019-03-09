import * as styles from "../styles/main.scss";
import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <nav className={styles.footer}>
        <Link href="/">
          <a>Home</a>
        </Link>
        &nbsp;
        <Link href="/contract">
          <a>계약</a>
        </Link>
        &nbsp;
        <Link href="/mall">
          <a>상품</a>
        </Link>
        &nbsp;
        <Link href="/calculation">
          <a>산출가입</a>
        </Link>
        &nbsp;
        <Link href="/helpdesk">
          <a>고객센터</a>
        </Link>
        &nbsp;
        <Link href="/disclosure">
          <a>공시실</a>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;


