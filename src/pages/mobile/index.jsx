import React from 'react'

import { Layout } from '#components/mobile/base/Layout'

import FullScreenDialog from '#components/mobile/test/FullScreenDialog'
import CustomizedDialogDemo from '#components/mobile/test/CustomizedDialogDemo'
import ControlledExpansionPanels from '#components/mobile/test/ControlledExpansionPanels'
import TextField from '#components/mobile/test/TextField'
import DemoTabs from '#components/mobile/test/DemoTabs'
import AutoSwipe from '#components/mobile/test/AutoSwipe'
import SlideDialog from '#components/mobile/test/SlideDialog'
import ClockMobx from '#components/mobile/test/ClockMobx'
import Counter from '#components/mobile/test/Counter'
import FileUploadTest from '#components/mobile/test/FileUploadTest'

import MainStyles from '#styles/mobile/base/Main.scss'

export default function MobileIndex() {
  return (
    <>
      <Layout title='HOME'>
        <ClockMobx title='Index Page' linkTo='/other' />
        <hr />
        <AutoSwipe />
        <hr />
        <Counter />
        <hr />
        <div className='test1'> 페이지 style 1회성 클래스 주입</div>
        <div className={MainStyles.test2}> 페이지 import scss 클래스 주입</div>
        <div style={{ color: 'blue' }}> tag 인라인 스타일 주입</div>
        <div>css 순서 : base.scss -> layout.css -> page import scss -> 페이지 style</div>
        <hr />
        <DemoTabs />
        <hr />
        <FullScreenDialog />
        <hr />
        <SlideDialog />
        <hr />
        <CustomizedDialogDemo />
        <hr />
        <ControlledExpansionPanels />
        <hr />
        <FileUploadTest />
        <hr />
        <TextField />
        <hr />
      </Layout>
      {/* 페이지 style class 주입 예시 (상단 헤더에 scss 파일들 로드 아래 들어갑니다.) */}
      <style jsx global>{`
        body {
          background-color: #f7f7f7;
        }
        hr {
          background: #eee;
        }
        .test1 {
          color: green;
        }
      `}</style>
    </>
  )
}
