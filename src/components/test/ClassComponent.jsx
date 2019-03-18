import * as React from 'react';

import Count from './FunctionComponent';

export default class Counter extends React.Component {
  state = {
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

/**
 * default prop 예제

import * as React from 'react';

interface Props {
  count?: number;
}

export default class Count extends React.Component<Props> {
  static defaultProps: Props = {
    count: 10
  };

  render () {
    return <h1>{this.props.count}</h1>;
  }
}
 */
