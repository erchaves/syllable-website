import React from 'react';
import NavMain from '../NavMain';
import NavSide from '../NavSide';
import ProjectSummary from '../ProjectSummary';
import PortfolioCarrousel from '../PortfolioCarrousel';
import portfolioData from '../../portfolio-data';

import './index.scss';

class Projects extends React.Component {
  render() {
    return (
      <div className="page page-projects">
        <div className="page-inner">
          <NavMain />
          <div className="page-panel">
            <div className="flex-container">
              <div className="flex-cols-2 col-left">
                <section className="portfolio-summary-section">
                  <div className="portfolio-summary">
                    <div className="arrow arrow-up">
                      <button className="icon-arrow-up"></button>
                    </div>
                    {
                      // todo
                      portfolioData.filter(project => {
                        return project.id===67582625;
                      }).map(project => {
                        return <ProjectSummary project={project} />;
                      })
                    }
                    <div className="arrow arrow-down">
                      <button className="icon-arrow-up"></button>
                    </div>
                  </div>
                </section>
              </div>
              <div className="flex-cols-2 col-right">
                <section className="portfolio-carrousel-section">
                  <div className="portfolio-carrousel-wrap">
                    <PortfolioCarrousel projects={portfolioData} />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <NavSide />
      </div>
    );
  }
}

export default Projects;
