import React from 'react';
import Head from 'next/head';
import Header from '#components/pc/base/Header';
import Footer from '#components/pc/base/Footer';
import LayoutClass from '#styles/pc/base/Layout.scss';
import SideMenu from './SideMenu';

const Layout = ({ title, isFooter = true, side, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      <div className={ LayoutClass.Wrap }>
        <main>
          {side && (
            <aside>
              <SideMenu />
            </aside>
          )}
          <section>{children}</section>
        </main>
      </div>
      {isFooter && <Footer />}
    </>
  );
};

// const side = styled.div`
//   width: 262px;
// `;

// const content = styled.div`
//   width: 100%;
// `;

// Layout.SideMenu = side;
// Layout.Contents = content;

export default Layout;
