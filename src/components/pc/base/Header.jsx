import React from 'react';

export class Header extends React.Component {
  render() {
    return (
      <>
        <header>header</header>
        {/* 페이지 style class 주입 예시 (상단 헤더에 scss 파일들 로드 아래 들어갑니다.) */}
        <style jsx global>{`
          body {
            background-color: #f7f7f7;
          }
        `}</style>
      </>
    );
  }
}
