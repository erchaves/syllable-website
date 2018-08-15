import React from 'react';

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
    } = this.props;

    // console.log(this.state.currentSlide);

    return (
      <div className="portfolio-carrousel" id="portfolioCarrousel">
        {
          projects.map((project, idx) => {
            return <div className="portfolio-carrousel-frame" key={idx}>
              <span className="project-img" id={`img${idx}`} />
              {/*
                <img className="project-img" src={project.image } alt={project.name} id={`img${idx}`} />
              */}
            </div>
          })
        }
      </div>
    );
  }
}

export default PortfolioCarrousel;
