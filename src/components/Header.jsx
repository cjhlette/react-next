import React from 'react';
import Link from 'next/link';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import layout from '@styles/layout.scss';
import Nav from '@components/Nav';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header(props) {
  const { classes } = props;

  const style = {

  }

  return (
    <>
      <AppBar position="static" style={{ flexGlow:1, position:'fixed' }}>{/* 이놈이 header */}
        <Toolbar>
          <div className="naviWrapper">
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);


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
