import React from 'react';
import Link from 'next/link';

import { AppBar, Toolbar, IconButton } from '@material-ui/core';

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';

import Nav from '@components/Nav';

const Header = (props) => {
  const { classes } = props;

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
          <div className="naviWrapper">
            <IconButton style={style.menuButton} color="inherit" aria-label="Menu">
              <Nav />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
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
}

Header.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default (Header);


/*
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

*/
