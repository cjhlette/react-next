import * as React from 'react';
import * as layout from '@styles/layout.scss';
import Nav from '@components/Nav';

const Header = () => {
  return (
    <>
      <header className={layout.base_header}>
        <div><Nav /></div>
      </header>
    </>
  );
};

export default Header;
