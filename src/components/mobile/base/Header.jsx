import React from 'react'
import Link from 'next/link'

import { Keyframes, animated } from 'react-spring/renderprops'
import delay from 'delay'

// Creates a spring with predefined animation slots
const Sidebar = Keyframes.Spring({
  // Slots can take arrays/chains,
  peek: [{ x: 0, from: { x: -100 }, delay: 500 }, { x: -100, delay: 800 }],
  // single items,
  open: { delay: 0, x: 0 },
  // or async functions with side-effects
  close: async call => {
    await delay(0)
    await call({ delay: 0, x: -100 })
  },
})

// Creates a keyframed trail
const Content = Keyframes.Trail({
  peek: [{ x: 0, opacity: 1, from: { x: -100, opacity: 0 }, delay: 600 }, { x: -100, opacity: 0, delay: 0 }],
  open: { x: 0, opacity: 1, delay: 100 },
  close: { x: -100, opacity: 0, delay: 0 },
})

const items = [
  <div className='item'>
    <Link href='/'>
      <a>홈</a>
    </Link>
  </div>,
  <div className='item'>
  <Link href='/mobile/contract'>
    <a>계약</a>
  </Link>
  </div>,
  <div className='item'>
    <Link href='/mobile/mall'>
      <a>상품</a>
    </Link>
  </div>,
  <div className='item'>
  <Link href='/mobile/calculation'>
    <a>산출가입</a>
  </Link>
  </div>,
  <div className='item'>
    <Link href='/mobile/helpdesk'>
      <a>고객센터</a>
    </Link>
  </div>,
  <div className='item'>
  <Link href='/mobile/disclosure'>
    <a>공시실</a>
  </Link>
</div>
]

class Header extends React.Component {
  state = { open: undefined }
  toggle = () => this.setState(state => ({ open: !state.open }))

  render() {
    const state = this.state.open ? 'open' : 'close'

    return (
      <>
        <header>
          <button onClick={this.toggle}>메뉴</button>

          <Sidebar native state={state}>
            {({ x }) => (
              <animated.div
                className='sidebar'
                style={{
                  transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                }}
              >
                <Content
                  native
                  items={items}
                  keys={items.map((_, i) => i)}
                  reverse={!this.state.open}
                  state={state}>
                  {(item, i) => ({ x, ...props }) => (
                    <animated.div
                      style={{
                        transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                        ...props,
                      }}>
                        {item}
                    </animated.div>
                  )}
                </Content>
              </animated.div>
            )}
          </Sidebar>
        </header>

        {/* 페이지 style class 주입 예시 (상단 헤더에 scss 파일들 로드 아래 들어갑니다.) */}
        <style jsx global>{`
          header button {
            font-size:30px;
            margin:5px;
          }
          header .item {
            margin : 10px 0px 10px 0px
          }
          body {
            background-color: #f7f7f7;
          }
        `}</style>
      </>
    )
  }
}
export default Header
