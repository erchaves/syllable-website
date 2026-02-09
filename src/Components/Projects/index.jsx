import React, { useState, useEffect, useCallback } from 'react';
import NavMain from '../NavMain';
import NavSide from '../NavSide';
import ProjectSummary from '../ProjectSummary';
import PortfolioImage from '../PortfolioImage';
import portfolioData from '../../portfolio-data';
import './index.scss';

const projects = portfolioData;

function Projects() {
  const [currentProjectIdx, setCurrentProjectIdx] = useState(0);

  const getProjectIdx = useCallback((newIdx) => {
    if (typeof newIdx === 'undefined') return 0;
    if (newIdx >= projects.length) return 0;
    if (newIdx < 0) return projects.length - 1;
    return newIdx;
  }, []);

  const handleClickPrev = useCallback(() => {
    setCurrentProjectIdx((prev) => getProjectIdx(prev - 1));
    window.scrollTo(0, 0);
  }, [getProjectIdx]);

  const handleClickNext = useCallback(() => {
    setCurrentProjectIdx((prev) => getProjectIdx(prev + 1));
    window.scrollTo(0, 0);
  }, [getProjectIdx]);

  useEffect(() => {
    const handleKeypress = (e) => {
      if (e.keyCode === 37) handleClickPrev();
      if (e.keyCode === 39) handleClickNext();
    };

    document.addEventListener('keydown', handleKeypress);
    return () => document.removeEventListener('keydown', handleKeypress);
  }, [handleClickPrev, handleClickNext]);

  // Preload project images
  useEffect(() => {
    const timer = setTimeout(() => {
      projects.forEach((project) => {
        const img = new Image();
        img.src = project.image;
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const project = projects[currentProjectIdx];

  return (
    <div className="page page-projects side-arrows">
      <NavMain activePage="projects" />

      <div className="page-inner">
        <div className="projects__nav arrow-prev">
          <button className="icon-arrow-up" onClick={handleClickPrev}></button>
        </div>

        <section className="two-col-panel scroll portfolio-panel portfolio-summary-section">
          <div className="portfolio-summary">
            {projects.map((proj, idx) => (
              <ProjectSummary
                project={proj}
                key={idx}
                isCurrentProject={currentProjectIdx === idx}
              />
            ))}
          </div>
        </section>

        <section className="two-col-panel portfolio-panel">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <PortfolioImage project={project} currentProjectIdx={currentProjectIdx} />
          </a>
        </section>

        <div className="projects__nav arrow-next">
          <button className="icon-arrow-up" onClick={handleClickNext}></button>
        </div>
      </div>

      <NavSide />
    </div>
  );
}

export default Projects;
