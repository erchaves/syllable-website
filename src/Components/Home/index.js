import React from 'react';
import MainMenu from '../MainMenu';
import SideMenu from '../SideMenu';
import './index.scss';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page page-home">
        <div className="page-inner">
          <MainMenu />
          <div className="page-panel">
            <a href="/projects" className="slogan">Tech that speaks human</a>
          </div>
        </div>
        <SideMenu />
      </div>
    );
  }
}

export default Home;
