import React from 'react';
import LazyImg from '../LazyImg';

import './index.scss';

class PortfolioImage extends React.Component {
  constructor() {
    super();

    this.state = {
      currentSlide: 0,
    };
  }

  render() {
    const {
      projects,
      currentProjectIdx,
    } = this.props;

    const currentProject = projects.find((project, idx) => {
      return idx === currentProjectIdx;
    });

    currentProject.idx = currentProjectIdx;

    return (
      <React.Fragment>
        <LazyImg src={currentProject.image } alt={currentProject.name} id={`img${currentProject.idx}`} />
        {/*
        <img className="project-img" src={currentProject.image } alt={currentProject.name} id={`img${currentProject.idx}`} />
        <span className="project-img" id={`img${currentProject.idx}`} >{currentProject.name}</span>
        */}
      </React.Fragment>
    );
  }
}

export default PortfolioImage;
