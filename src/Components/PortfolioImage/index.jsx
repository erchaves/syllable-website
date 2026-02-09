import React from 'react';
import LazyImg from '../LazyImg';

function PortfolioImage({ project }) {
  return <LazyImg src={project.image} alt={project.name} />;
}

export default PortfolioImage;
