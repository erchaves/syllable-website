import React from 'react';

import './index.scss';

class PortfolioCarrousel extends React.Component {
  render() {
    const {
      projects,
    } = this.props;

    return (
      <div className="portfolio-carrousel">
        {
          projects.map(project => {
            return <div className="portfolio-carrousel-frame">
              <img className="project-img" src={project.image} alt={project.name} />
            </div>
          })
        }
      </div>
    );
  }
}

export default PortfolioCarrousel;
