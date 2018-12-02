import React from 'react';
import './index.scss';

class NavMain extends React.Component {
  render() {
    return (
      <div className="nav-main">
        <ul className="flex-wrap">
          <li className="item-secondary flex-item">
            <a href="/projects">Projects</a>
          </li>
          <li className="item-primary flex-item">
            <a href="/">
              <img className={`syllable-logo`} src={`/syllable-logo.png`} />
            </a>
          </li>
          <li className="item-secondary flex-item">
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavMain;
