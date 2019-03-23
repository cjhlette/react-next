import React from 'react';
import Head from 'next/head';

import LayoutClass from '#styles/pc/base/Layout.scss';

import Header from '#components/pc/base/Header';
import Footer from '#components/pc/base/Footer';

import { initGA, logPageView } from '#lib/analytics/analytics';

import SideMenu from './SideMenu';

export class Layout extends React.Component {

  componentDidMount() {

    // PC용 껍데기 class 주입
    document.getElementById('__next').classList.add('PcWrapper');

    // google ga script
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();

  }

  render() {
    return (
      <>
        <Head>
          <title>{this.props.title}</title>
        </Head>

        <Header />

        <main>
          {this.props.side && (
            <aside>
              <SideMenu />
            </aside>
          )}
          <section>{this.props.children}</section>
        </main>

        <Footer />

      </>

    );
  }
}

// import React from 'react';
// import Head from 'next/head';
// import Header from '#components/pc/base/Header';
// import Footer from '#components/pc/base/Footer';
// import LayoutClass from '#styles/pc/base/Layout.scss';
// import SideMenu from './SideMenu';
//
// const Layout = ({ title, isFooter = true, side, children }) => {
//   return (
{/*<>*/}
{/*<Head>*/}
{/*<title>{title}</title>*/}
{/*</Head>*/}

{/*<Header />*/}

{/*<div className={ LayoutClass.Wrap }>*/}
{/*<main>*/}
{/*{side && (*/}
{/*<aside>*/}
{/*<SideMenu />*/}
{/*</aside>*/}
{/*)}*/}
{/*<section>{children}</section>*/}
{/*</main>*/}
{/*</div>*/}
{/*{isFooter && <Footer />}*/}
{/*</>*/}
//   );
// };
//
// // const side = styled.div`
// //   width: 262px;
// // `;
//
// // const content = styled.div`
// //   width: 100%;
// // `;
//
// // Layout.SideMenu = side;
// // Layout.Contents = content;
//
// export default Layout;
