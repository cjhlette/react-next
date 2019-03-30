import React from 'react';
import Link from 'next/link'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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
  drawer: {
    width: 300,
  }
};

class Header extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <>

        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('right', true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              바니바니바니바니
            </Typography>
            {/*<Button color="inherit">Login</Button>*/}
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
          onOpen={this.toggleDrawer('right', true)}
          swipeAreaWidth={20}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
            className={classes.drawer}
          >
            <div>
              <List>
                <Link href='/'>
                  <ListItem>
                      <a>HOME</a>
                  </ListItem>
                </Link>
                <Link href='/mobile/contract'>
                  <ListItem>
                    <a>계약</a>
                  </ListItem>
                </Link>
                <Link href='/mobile/mall'>
                  <ListItem>
                    <a>상품</a>
                  </ListItem>
                </Link>
                <Link href='/mobile/calculation'>
                  <ListItem>
                    <a>산출가입</a>
                  </ListItem>
                </Link>
                <Link href='/mobile/helpdesk'>
                  <ListItem>
                    <a>고객센터</a>
                  </ListItem>
                </Link>
                <Link href='/mobile/disclosure'>
                  <ListItem>
                    <a>공시실</a>
                  </ListItem>
                </Link>
              </List>
            </div>
          </div>
        </SwipeableDrawer>

        {/* 페이지 style class 주입 예시 (상단 헤더에 scss 파일들 로드 아래 들어갑니다.) */}
        <style jsx global>{`
          header button {
            font-size:30px;
            margin:5px;
          }
          .drawerDiv {
            width:80%
          }
        `}</style>
      </>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
