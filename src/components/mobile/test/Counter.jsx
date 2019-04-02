import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

const appState = observable({
  count: 0,
})
appState.inc = function() {
  this.count++
}
appState.dec = function() {
  this.count--
}

@observer
class Counter extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  inc = () => {
    appState.inc()
  }

  dec = () => {
    appState.dec()
  }

  render() {
    return (
      <>
        <h2>Mobx Counter: {appState.count}</h2>
        <button onClick={this.inc}>Increment</button>

        <button onClick={this.dec}>Decrement</button>
      </>
    )
  }
}

export default Counter
