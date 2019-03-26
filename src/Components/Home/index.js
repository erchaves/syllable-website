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
        <NavMain activePage='home'/>
        <div className="page-inner">
          <div className="page-panel">
            <a href="/about" className="slogan">Tech that <span className="nowrap">speaks human</span></a>
          </div>
        </div>
        <NavSide />
      </div>
    );
  }
}

export default Home;
