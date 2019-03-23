import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import nav from '#styles/mobile/base/Nav.scss';

const styles = {};

class Nav extends React.Component{
  constructor(props) {
    super(props);
  }

  state = {
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    return (
      <>
        {/*메뉴버튼*/}
        <div className={nav.btn_menu} onClick={this.toggleDrawer('right', true)}>
          메뉴
        </div>


        {/*튀어나오는 메뉴*/}
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
        >

          <nav className={nav.base_nav}>
            {/*<Button onClick={this.toggleDrawer('right', false)}>[닫기]</Button>*/}
            <hr/>
            <Link href="/">
              <a className={nav.btn_home}>Home</a>
            </Link>
            <hr/>
            <Link href="/mobile/contract">
              <a>계약</a>
            </Link>
            <hr />
            <Link href="/mobile/mall">
              <a>상품</a>
            </Link>
            <hr />
            <Link href="/mobile/calculation">
              <a>산출가입</a>
            </Link>
            <hr />
            <Link href="/mobile/helpdesk">
              <a>고객센터</a>
            </Link>
            <hr />
            <Link href="/mobile/disclosure">
              <a>공시실</a>
            </Link>
            <hr />
          </nav>

        </Drawer>
      </>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);
