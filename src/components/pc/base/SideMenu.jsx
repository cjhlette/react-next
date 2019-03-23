import Link from 'next/link';
import SideMenuClass from '#styles/pc/base/SideMenu.scss';

const SideMenu = () => {
  return (
    <div className={ SideMenuClass.SideMenu }>
      <ul>
        <li>
          <Link href="/">
            <a>홈</a>
          </Link>
        </li>
        <li>
          <Link href="/contract">
            <a>계약</a>
          </Link>
        </li>
        <li>
          <Link href="/mall">
            <a>상품</a>
          </Link>
        </li>
        <li>
          <Link href="/calculation">
            <a>산출가입</a>
          </Link>
        </li>
        <li>
          <Link href="/helpdesk">
            <a>고객센터</a>
          </Link>
        </li>
        <li>
          <Link href="/disclosure">
            <a>공시실</a>
          </Link>
        </li>
        <li>
          <Link href="/company">
            <a>회사소개</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
