import * as React from 'react';
import { PageTransition } from 'next-page-transitions';

const withTransition = WarppedComponent => {
  return class PageWrapper extends React.Component {
    render() {
      return (
        <div className="page">
          <PageTransition timeout={300} classNames="page-transition">
            <WarppedComponent {...this.props} />
          </PageTransition>
          <style jsx global>{`
            .page-transition-enter {
              opacity: 0;
              transform: translate3d(0, 20px, 0);
            }
            .page-transition-enter-active {
              opacity: 1;
              transform: translate3d(0, 0, 0);
              transition: opacity 300ms, transform 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
          `}</style>
        </div>
      );
    }
  };
};
export default withTransition;
