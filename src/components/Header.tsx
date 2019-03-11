import * as React from 'react';
import * as styles from "@styles/main.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <img src="/static/images/nextjs-logo.png" className={styles.logo} />
        </div>
      </header>
    </>
  );
};

export default Header;
