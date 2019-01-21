import React from 'react';
import './index.scss';

class NavMain extends React.Component {
  render() {
    return (
      <nav className="nav-main">
        <a className="nav-logo" href="/">
          <img className={`syllable-logo`} src={`/syllable-logo.png`} />
        </a>
        <ul className="flex-wrap nav-items">
          <li className="item-secondary flex-item">
            <a href="/about">Profile</a>
          </li>
          <li className="item-secondary flex-item">
            <a href="/projects">Projects</a>
          </li>
          <li className="item-secondary flex-item">
            <a href="https://medium.com/@syllable">Blog</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavMain;
