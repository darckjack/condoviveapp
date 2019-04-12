import React from 'react';
import App, { Container } from 'next/app';
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Condovive extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default Condovive;