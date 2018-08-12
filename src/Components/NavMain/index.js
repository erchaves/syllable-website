import React from 'react';
import './index.scss';

class NavMain extends React.Component {
  render() {
    return (
      <div className="main-menu">
        <ul className="flex-wrap">
          <li className="item-secondary flex-item">
            <a href="/projects">Projects</a>
          </li>
          <li className="item-primary flex-item">
            <a href="/">
              {/*
                <span className="syllable-logo icon-syllable-logo"></span>
                <img className="syllable-logo" src="/syllable-logo-new-2.png" />
              */}
                <img className="syllable-logo" src="/syllable-logo-new.png" />
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
