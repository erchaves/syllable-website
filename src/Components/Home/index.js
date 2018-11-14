import React from 'react';
import { withRouter } from 'react-router';
import NavMain from '../NavMain';
import NavSide from '../NavSide';
import queryString from 'query-string'

import './index.scss';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    const params = queryString.parse(this.props.location.search)
    const logo = params.logo;

    return (
      <div className="page page-home">
        <div className="page-inner">
          <NavMain logo={logo} />
          <div className="page-panel">
            <a href="/projects" className="slogan">Tech that <span className="nowrap">speaks human</span></a>
          </div>
        </div>
        <NavSide />
      </div>
    );
  }
}

export default withRouter(Home);
