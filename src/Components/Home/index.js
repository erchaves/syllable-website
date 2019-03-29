import React from 'react';
import NavMain from '../NavMain';
import NavSide from '../NavSide';
import Lottie from 'react-lottie';
import animationData from '../../../public/logo-animation/data.json';

import './index.scss';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {isStopped: false, isPaused: false};
  }

  render() {
    // for temp testing
    let shouldShowClouds;

    if (typeof window !== 'undefined' && window.location.pathname.search('clouds') > 0) {
      shouldShowClouds = true;
    }

    const defaultOptions = {
      // loop, but we'll pause the animation at the end of each loop.
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      },
    };

    return (
      <div className={`page page-home ${shouldShowClouds ? 'page-clouds' : ''}`}>
        <NavMain activePage='home'/>
        <div className="page-inner">
          <div className="page-panel">
            <div className="animation">
              <a href="/projects" >
                <Lottie
                  options={defaultOptions}
                  ref={el => {this.lottie = el}}
                  isStopped={this.state.isStopped}
                  isPaused={this.state.isPaused}
                />
              </a>
            </div>
          </div>
        </div>
        <NavSide />
      </div>
    );
  }
}

export default Home;
