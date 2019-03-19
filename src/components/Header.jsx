import React from 'react';
import Link from 'next/link';

import { AppBar, Toolbar, IconButton } from '@material-ui/core';


import Nav from '@components/Nav';

const Header = (props) => {

  const style = {
    base_header:{
      flexGlow:1,
      position:'fixed'
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    }
  }

  return (
    <>
      <AppBar position="static" style={ style.base_header }>{/* 이놈이 header */}
        <Toolbar>
          <div >
            <IconButton style={style.menuButton} color="inherit" aria-label="Menu">
              <Nav />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

Header.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default Header;
