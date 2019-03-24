import React from 'react';
import Link from 'next/link';

export class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <div>
            <Link href="/">
              <a>홈</a>
            </Link>
          </div>
          <div>
            <Link href="/mobile/contract">
              <a>계약</a>
            </Link>
          </div>
          <div>
            <Link href="/mobile/mall">
              <a>상품</a>
            </Link>
          </div>
          <div>
            <Link href="/mobile/calculation">
              <a>산출가입</a>
            </Link>
          </div>
          <div>
            <Link href="/mobile/helpdesk">
              <a>고객센터</a>
            </Link>
          </div>
          <div>
            <Link href="/mobile/disclosure">
              <a>공시실</a>
            </Link>
          </div>
        </header>
        {/* 페이지 style class 주입 예시 (상단 헤더에 scss 파일들 로드 아래 들어갑니다.) */}
        <style jsx global>{`
          header div {
            float:left;
            margin-top:20px;
            margin-left:10px;
          }
          body {
            background-color: #f7f7f7;
          }
        `}</style>
      </>
    );
  }
}
