import React from 'react';
import * as layout from '@styles/layout.scss';

const FooterFloating = () => {
  return (
    <>
      <article className={layout.floating_menu}>
        <button type="button" className="ico1">
          <span>버튼1</span>
        </button>
        <button type="button" className="ico2">
          <span>버튼2</span>
        </button>
        <button type="button" className="ico3">
          <span>버튼3</span>
        </button>
        <button type="button" className="ico4">
          <span>버튼4</span>
        </button>
      </article>
    </>
  );
};

export default FooterFloating;
