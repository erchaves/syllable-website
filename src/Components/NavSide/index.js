import React from 'react';
import './index.scss';

class NavSide extends React.Component {
  render() {
    return (
      <div className="side-menu">
        <div className="bar-wrap left">
          <div className="bar">
            <div className="menu">
              <a className="menu-item" href="https://www.behance.net/erchaves">
                <span className="icon-behance"></span>
              </a>
              <a className="menu-item" href="https://medium.com/@syllable">
                <span className="icon-medium"></span>
              </a>
              <a className="menu-item" href="https://twitter.com/syllable_team">
                <span className="icon-twitter"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="bar-wrap right">
          <div className="bar">
            right
          </div>
        </div>
      </div>
    );
  }
}

export default NavSide;
