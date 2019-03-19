import * as React from 'react';

function Count(props) {
  return <h1>{props.count}</h1>;
};

export default Count;


/**
 * prop 전달 예제

interface Props {
  count: number;
}

const Count: React.FunctionComponent<Props> = (props) => {
  return <h1>{props.count}</h1>;
};
 */