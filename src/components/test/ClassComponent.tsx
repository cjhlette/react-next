import * as React from 'react';

import Count from './FunctionComponent';

interface Props {}

interface State {
  count: number;
}

export default class Counter extends React.Component<Props, State> {
  state: State = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count += 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count -= 1,
    });
  };

  render() {
    return (
      <div style={{ margin: '10px' }}>
        <Count count={this.state.count} />
        <button style={{ marginRight: '10px' }} onClick={this.increment}>
          increment Click
        </button>
        <button onClick={this.decrement}>decrement Click</button>
      </div>
    );
  }
}
