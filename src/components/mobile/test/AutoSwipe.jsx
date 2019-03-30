import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
// import Pagination from 'docs/src/modules/components/Pagination';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: 'relative',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  slide4: {
    backgroundColor: '#d200ff',
  },
};

class DemoAutoPlay extends React.Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div style={styles.root}>
        <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            구글클라우드 + Nginx 웹서버 + http/2.0 + 리엑트
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            주황이라..디자인 힘들겠다..
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            화면 개발 인터넷 막히면 큰일나요...
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide4)}>
            nodejs / npm 사용 가능해야 합니다. 리엑트는 gradle, maven 같이 npm 패키지 매니저 기반 개발입니다.
          </div>
        </AutoPlaySwipeableViews>
        {/*<Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />*/}
      </div>
    );
  }
}

export default DemoAutoPlay;
