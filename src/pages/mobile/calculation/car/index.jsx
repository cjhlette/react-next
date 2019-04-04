import React from 'react'
import { Layout } from "#components/mobile/base/Layout";
import Router from 'next/router';

class CarMain extends React.Component{

  state = {
    currentStep : 1
  }

  componentDidMount() {
    // const { router } = this.props;
    console.log(this.state.currentStep)
  }

  next() {
    // console.log(state.currentStep)
    console.log('next')
    // if(this.state.currentStep === 3) return
    // this.setState({currentStep: this.state.currentStep + 1})
    Router.push('/mobile/calculation/car/?page=step2')
  }

  prev() {
    // console.log(state.currentStep)
    console.log('prev')
    // if(this.state.currentStep === 0) return
    // this.setState({currentStep: this.state.currentStep - 1})
    Router.push('/mobile/calculation/car/?page=step1')
  }

  render() {
    return (
      <Layout title="산출1 !!">
        <pre>산출1 메인2</pre>

        <div id="step1">
          step1
        </div>

        <div id="step2">
          step2
        </div>

        <div id="step3">
          step3
        </div>

        <div id="step4">
          step4
        </div>

        <div>
          <button onClick={this.prev}>
            이전
          </button>
          <button onClick={this.next}>
            다음
          </button>
        </div>

      </Layout>
    );
  }
}
export default CarMain
