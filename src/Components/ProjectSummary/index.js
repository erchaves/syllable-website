import React from 'react';

import './index.scss';

class ProjectSummary extends React.Component {
  render() {
    const {
      project,
    } = this.props;

    return (
      <div className="project-summary" data-is-current-project={this.props.isCurrentProject} >
        <div className="name">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <span className="pipe">|</span>
            {project.name}
            <span className="pipe">|</span>
          </a>
        </div>
        <div className="summary">
          {project.summary}
        </div>
        <div className="skills">
          {
            project.skills.map(skill => {
              return <span className="skill" key={skill}>
                <span className="pipe">|</span>
                <span>{skill}</span>
              </span>
            })
          }
          {/*one more to cap it off*/}
          <span className="pipe">|</span>
        </div>
      </div>
    );
  }
}

export default ProjectSummary;
