import React from 'react';
import NavMain from '../NavMain';
import NavSide from '../NavSide';
import Lottie from 'react-lottie';
import animationData from '../../../public/logo-animation/data.json';

import './index.scss';

const loadPhaseImages = [
  {
    src: '/background-brooklyn-cropped-masked.png',
  },
  {
    src: '/clouds-tile.png',
  }
];

const delayBtwCloudsAndLogo = 250;
let loadPhase = 0;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isStopped: false,
      isPaused: false,
      loadPhase: 0,
    };
  }

  handleImageLoaded = (e) => {
    // use loadPhase instead of this.state.loadPhase to ensure that
    // react doesn't skip one when it optimizes
    this.setState({
      loadPhase: ++loadPhase,
    });
  }

  componentDidUpdate() {
    // set a timer to load state 3 a short while after state 2
    if (this.state.loadPhase === 2) {
      setTimeout(() => {
        this.setState({
          loadPhase: loadPhase++
        });
      }, delayBtwCloudsAndLogo);
    }
  }

  render() {
    // for temp testing
    let shouldShowClouds = true;
    let shouldShowDemo;

    if (typeof window !== 'undefined' && window.location.search.indexOf('demo') > 0) {
      shouldShowDemo = true;
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

    const x =  this.state.loadPhase;
    return (
      <div className={`page page-home ${shouldShowClouds ? 'page-clouds' : ''} ${shouldShowDemo ? 'demo' : ''}`}>
        <div className="hidden-preloaders">
          <img src={loadPhaseImages[0].src} onLoad={this.handleImageLoaded} />
          <img src={loadPhaseImages[1].src} onLoad={this.handleImageLoaded} />
        </div>
        <NavMain activePage='home'/>
        <div className="page-inner">
          <div className="page-panel">
            <div className="bg bg-building"
              style={this.state.loadPhase > 1 ? {
                backgroundImage: `url(${loadPhaseImages[0].src})`,
                opacity: 1,
              } : {}}
            />
            <div className="bg bg-clouds-wrap" style={this.state.loadPhase > 1 ? {
                  opacity: 1,
              } : {}}
            >
              <div className="bg bg-clouds"
                style={this.state.loadPhase > 1 ? {
                  backgroundImage: `url(${loadPhaseImages[1].src})`,
                } : {}}
              />
            </div>
            <div className="animation">
              <a href="/projects" >
              {
                this.state.loadPhase > 2 && <Lottie
                  options={defaultOptions}
                  ref={el => {this.lottie = el}}
                  isStopped={this.state.isStopped}
                  isPaused={this.state.isPaused}
                />
              }
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
