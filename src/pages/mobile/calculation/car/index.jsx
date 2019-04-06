import React from 'react'
import { Layout } from '#components/mobile/base/Layout'
import Slider from 'react-slick'

import Step1 from './page/step1'
import Step2 from './page/step2'
import Step3 from './page/step3'
import Step4 from './page/step4'
import Step5 from './page/step5'
import Step6 from './page/step6'

class CarMain extends React.Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }

  state = {
    activeSlide: 0,
    activeSlide2: 0,
  }

  componentDidMount() {
    // const { router } = this.props;
    // console.log(this.state.currentStep)
  }

  next() {
    if (this.state.activeSlide == 5) return
    this.slider.slickNext()
  }
  previous() {
    if (this.state.activeSlide < 1) return
    this.slider.slickPrev()
  }

  render() {
    var settings = {
      touchMove: false,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current }),
    }

    return (
      <Layout title='산출1 !!'>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
        <pre>산출1 메인2</pre>

        <Slider ref={slider => (this.slider = slider)} {...settings} className='slider'>
          <div className='test1'>
            <Step1 />
          </div>
          <div className='test2'>
            <Step2 />
          </div>
          <div className='test3'>
            <Step3 />
          </div>
          <div className='test4'>
            <Step4 />
          </div>
          <div className='test5'>
            <Step5 />
          </div>
          <div className='test6'>
            <Step6 />
          </div>
        </Slider>

        <div style={{ textAlign: 'center' }}>
          <button className='button' onClick={this.previous}>
            Previous
          </button>
          <button className='button' onClick={this.next}>
            Next
          </button>
        </div>

        <p>
          BeforeChange => activeSlide: <strong>{this.state.activeSlide}</strong>
        </p>
        <p>
          AfterChange => activeSlide: <strong>{this.state.activeSlide2}</strong>
        </p>

        <style jsx global>{`
          .slick-slider div {
            height: 300px;
          }
          .button {
            margin: 10px;
            border: 1px solid green;
            width: 100px;
            height: 50px;
          }
        `}</style>
      </Layout>
    )
  }
}
export default CarMain
