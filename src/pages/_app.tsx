import * as React from 'react';
import App, { Container } from 'next/app';

export default class extends App {
  render() {
    const { props } = this as any;
    const { Component, pageProps } = props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
