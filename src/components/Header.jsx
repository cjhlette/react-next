import React from 'react';
import Link from 'next/link';

import layout from '@styles/layout.scss';
import Nav from '@components/Nav';

const Header = () => {
  return (
    <>
      <header className={layout.base_header}>
        <div className="homeButtonWrapper">
          <Link href="/">
            <a>[홈]</a>
          </Link>
        </div>
        <div className="naviWrapper">
          <Nav />
        </div>
      </header>
      <style jsx>{`
        .homeButtonWrapper {
          float: left;
          width: 50px;
          text-align: center;
          padding: 6px 8px;
        }
        .naviWrapper {
          float: right;
        }
      `}</style>
    </>
  );
};

export default Header;
