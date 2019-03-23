import React from 'react';
import dynamic from 'next/dynamic';

const Index = dynamic(import('#components/Index'), { ssr: false });

export default class extends React.Component {
  render() {
    return <Index />;
  }
}
