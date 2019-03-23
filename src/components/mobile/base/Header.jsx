import React, { Component } from 'react';

import '@material/react-top-app-bar/index.scss';
import '@material/react-material-icon/index.scss';
import '@material/react-drawer/index.scss';

import TopAppBar from '@material/react-top-app-bar';
// import Drawer from '@material/react-drawer';
import MaterialIcon from '@material/react-material-icon';
// import Link from 'next/link';

export default class Header extends Component {
  state = { open: false };

  onDrawerOpen = () => {
    this.setState({ open: true });
  };

  onDrawerClose = () => {
    this.setState({ open: false });
  };

  onListItemClick = () => this.onDrawerClose();

  render() {
    return (
      <>
        {/* header  */}
        <TopAppBar
          title="test"
          fixed
          navigationIcon={
            <MaterialIcon
              icon="menu"
              onClick={ this.onDrawerOpen }
            />
          }
        />

        {/* 메뉴 */}
        {/*
        <Drawer
          modal={true}
          open={this.state.open}
          onClose={this.onDrawerClose}
        >
          <button onClick={ this.onDrawerClose }>
            닫기
          </button>
          <Link href="/">
            <a>Home</a>
          </Link>
          <hr />
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
        </Drawer>
        */}
      </>
    );
  }
}
