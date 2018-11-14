import React from 'react';
import NavMain from '../NavMain';
import NavSide from '../NavSide';
import ProjectSummary from '../ProjectSummary';
import PortfolioCarrousel from '../PortfolioCarrousel';
import portfolioData from '../../portfolio-data';
import './index.scss';

const projects = portfolioData;

class Projects extends React.Component {
  constructor() {
    super();

    this.state = {
      currentProject: 0,
    };

    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
  }

  componentDidMount () {
    this.preloadImages();
  }

  preloadImages() {
    // give the page load a head start
    const delay = 100;

    setTimeout(() => {
      projects.forEach((project) => {
        const img = new Image();
        img.src = project.image;
      });
    }, delay);
  }

  getProjectIdx(newIdx) {
    const projectsLen = projects.length;

    if (typeof newIdx === 'undefined') {
      return 0;
    }

    // wrap to bottom
    if (newIdx >= projectsLen) {
      return 0;
    }

    // wrap to top
    if (newIdx < 0) {
      return projectsLen - 1;
    }

    return newIdx;
  }

  handleClickPrev(e) {
    const currProj = this.getProjectIdx(this.state.currentProject - 1);
    this.setState({currentProject: currProj});
  }

  handleClickNext(e) {
    const currProj = this.getProjectIdx(this.state.currentProject + 1);
    this.setState({currentProject: currProj});
  }

  render() {
    return (
      <div className="page page-projects side-arrows single-project-view">
        <div className="page-inner">
          <NavMain />
          <div className="page-panel">
            <div className="flex-container">
              <div className="flex-cols-2 col-left">
                <div className="mobile-disclaimer">
                  <span>
                    Mobile design coming soon ;)
                  </span>
                </div>
                <section className="portfolio-summary-section">
                  <div className="portfolio-summary">
                    <div className="arrow arrow-prev">
                      <button className="icon-arrow-up" onClick={this.handleClickPrev}></button>
                    </div>
                    {
                      // todo
                      projects.map((project, idx) => {
                        return <ProjectSummary project={project} key={idx} isCurrentProject={this.state.currentProject === idx} />
                      })
                    }
                    <div className="arrow arrow-next">
                      <button className="icon-arrow-up" onClick={this.handleClickNext}></button>
                    </div>
                  </div>
                </section>
              </div>
              <div className="flex-cols-2 col-right">
                <section className="portfolio-carrousel-section">
                  <div className="portfolio-carrousel-wrap">
                    <PortfolioCarrousel projects={projects} currentProjectIdx={this.state.currentProject} />
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
