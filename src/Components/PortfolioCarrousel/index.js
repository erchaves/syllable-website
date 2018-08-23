import React from 'react';
import LazyImg from '../LazyImg';

import './index.scss';

class PortfolioCarrousel extends React.Component {
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
      <div className="portfolio-carrousel" id="portfolioCarrousel">
        {
          // projects.map((project, idx) => {
          //   return <div className="portfolio-carrousel-frame" key={idx}>
          //       <span className="project-img" id={`img${idx}`} />
          //     {/*
          //     <img className="project-img" src={project.image } alt={project.name} id={`img${idx}`} />
          //     */}
          //   </div>
          // })
        }
        <div className="portfolio-carrousel-frame" >
          <LazyImg src={currentProject.image } alt={currentProject.name} id={`img${currentProject.idx}`} />
          {/*
          <img className="project-img" src={currentProject.image } alt={currentProject.name} id={`img${currentProject.idx}`} />
          <span className="project-img" id={`img${currentProject.idx}`} >{currentProject.name}</span>
          */}
        </div>
      </div>
    );
  }
}

export default PortfolioCarrousel;
