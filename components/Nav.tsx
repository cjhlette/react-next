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
        <Link href="/cowsay/">
          <a>cowsay</a>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;


