import React, { useState, useEffect, useRef } from 'react';
import './index.scss';

function LazyImg({ src, alt }) {
  const [imageStatus, setImageStatus] = useState('');
  const loaderTimeout = useRef(null);
  const prevSrc = useRef(src);

  useEffect(() => {
    if (prevSrc.current !== src) {
      prevSrc.current = src;
      clearTimeout(loaderTimeout.current);
      loaderTimeout.current = setTimeout(() => {
        setImageStatus('loading');
      }, 50);
    }
    return () => clearTimeout(loaderTimeout.current);
  }, [src]);

  const handleImageLoaded = () => {
    clearTimeout(loaderTimeout.current);
    setImageStatus('loaded');
  };

  const handleImageErrored = () => {
    clearTimeout(loaderTimeout.current);
    setImageStatus('failed to load');
  };

  return (
    <div className="lazy-img" data-status={imageStatus}>
      <span className="loading-icon icon-spin2 animate-spin"></span>
      <img src={src} alt={alt} onLoad={handleImageLoaded} onError={handleImageErrored} />
    </div>
  );
}

export default LazyImg;
