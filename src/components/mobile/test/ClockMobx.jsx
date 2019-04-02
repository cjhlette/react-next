import React from 'react'
import { inject, observer } from 'mobx-react'
import Clock from './Clock'

@inject('store')
@observer
class ClockMobx extends React.Component {
  componentDidMount() {
    this.props.store.start()
  }

  componentWillUnmount() {
    this.props.store.stop()
  }

  render() {
    return (
      <>
        <Clock lastUpdate={this.props.store.lastUpdate} light={this.props.store.light} />
      </>
    )
  }
}

export default ClockMobx
