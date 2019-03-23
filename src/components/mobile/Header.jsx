import React from 'react';
import Link from 'next/link';

import Nav from '#components/mobile/Nav';

import layout from '#styles/mobile/layout.scss';

const Header = (props) => {

  return (
    <>
      <header className={ layout.base_header }>{/* 이놈이 header */}
        <Nav />
      </header>
    </>
  );
}

Header.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default Header;
