// import "../styles/main.scss";
import * as styles from "../styles/main.scss";
// import Link from 'next/link';
import Head from "next/head";

import Header from './Header';
import Footer from './Footer';

export const Layout = props => (
  <div>
    <Head>
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header/>

    <article className={styles.container}>{props.children}</article>

    <Footer/>
  </div>
);
