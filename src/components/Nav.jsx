import React from 'react';
import Link from 'next/link';

import layout from '@styles/layout.scss';
import nav from '@styles/nav.scss';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const styles = {
  list: {
    width: '100%',
  },
  fullList: {
    width: 'auto',
  },
};

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
        <Button onClick={this.toggleDrawer('right', true)}>[메뉴]</Button>

        {/*튀어나오는 메뉴*/}
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
        >

          <nav className={layout.base_nav}>
            <Button onClick={this.toggleDrawer('right', false)}>[닫기]</Button>
            <hr/>
            <Link href="/">
              <a className={nav.btn_home}>Home</a>
            </Link>
            <hr/>
            <Link href="/contract">
              <a>계약</a>
            </Link>
            <hr />
            <Link href="/mall">
              <a>상품</a>
            </Link>
            <hr />
            <Link href="/calculation">
              <a>산출가입</a>
            </Link>
            <hr />
            <Link href="/helpdesk">
              <a>고객센터</a>
            </Link>
            <hr />
            <Link href="/disclosure">
              <a>공시실</a>
            </Link>
            <hr />
          </nav>

        </Drawer>
      </>
    );
  }
}

export default withStyles(styles)(Nav);
