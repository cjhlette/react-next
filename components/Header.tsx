import * as styles from "../styles/main.scss";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div>
          <img src="/static/images/nextjs-logo.png" className={styles.logo} />
        </div>
      </header>
    </div>
  );
};

export default Header;
