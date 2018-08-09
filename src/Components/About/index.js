import React from 'react';
import Menu from '../Menu';
import './index.scss';

class About extends React.Component {
  render() {
    return (
      <div className="page page-about">
        <div className="page-inner">
          <Menu />
          About
        </div>
      </div>
    );
  }
}

export default About;
