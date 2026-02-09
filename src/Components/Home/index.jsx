import React, { useState, useRef } from 'react';
import NavMain from '../NavMain';
import NavSide from '../NavSide';
import Lottie from 'lottie-react';
import animationData from '../../../public/logo-animation/data.json';

import './index.scss';

const loadPhaseImages = [
  { src: '/background-brooklyn-cropped-masked.png' },
  { src: '/clouds-tile.png' },
];

const delayBtwCloudsAndLogo = 500;

function Home() {
  const [loadPhase, setLoadPhase] = useState(0);
  const loadCountRef = useRef(0);

  const handleImageLoaded = () => {
    loadCountRef.current += 1;

    if (loadCountRef.current === 2) {
      setLoadPhase(2);
      setTimeout(() => {
        setLoadPhase(3);
      }, delayBtwCloudsAndLogo);
    }
  };

  const handleImageError = () => {
    console.log('One of the images failed to load');
  };

  const shouldShowClouds = true;
  const shouldShowDemo =
    typeof window !== 'undefined' &&
    window.location.search.indexOf('demo') > 0;

  return (
    <div className={`page page-home ${shouldShowClouds ? 'page-clouds' : ''} ${shouldShowDemo ? 'demo' : ''}`}>
      <div className="hidden-preloaders">
        <img src={loadPhaseImages[0].src} onLoad={handleImageLoaded} onError={handleImageError} />
        <img src={loadPhaseImages[1].src} onLoad={handleImageLoaded} onError={handleImageError} />
      </div>
      <NavMain activePage="home" />
      <div className="page-inner">
        <div className="page-panel">
          <div
            className="bg bg-building"
            style={
              loadPhase > 1
                ? { backgroundImage: `url(${loadPhaseImages[0].src})`, opacity: 1 }
                : {}
            }
          />
          <div
            className="bg bg-clouds-wrap"
            style={loadPhase > 1 ? { opacity: 1 } : {}}
          >
            <div
              className="bg bg-clouds"
              style={
                loadPhase > 1
                  ? { backgroundImage: `url(${loadPhaseImages[1].src})` }
                  : {}
              }
            />
          </div>
          <div className="animation">
            <a href="/projects">
              {loadPhase > 2 && (
                <Lottie
                  animationData={animationData}
                  loop={false}
                  autoplay={true}
                />
              )}
            </a>
          </div>
        </div>
      </div>
      <NavSide />
    </div>
  );
}

export default Home;
