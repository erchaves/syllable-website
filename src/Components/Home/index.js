import React from 'react';
import NavMain from '../NavMain';
import NavSide from '../NavSide';
import './index.scss';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page page-home">
        <div className="page-inner">
          <NavMain />
          <div className="page-panel">
            <a href="/projects" className="slogan">Tech that speaks human</a>
          </div>
        </div>
        <NavSide />
      </div>
    );
  }
}

export default Home;
