import React from 'react';
import Menu from '../Menu';
import './index.scss';

class Projects extends React.Component {
  render() {
    return (
      <div className="page page-projects">
        <div className="page-inner">
          <Menu />
          Projects
        </div>
      </div>
    );
  }
}

export default Projects;
