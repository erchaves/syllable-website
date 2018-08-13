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
              {/*
                  <img className="syllable-logo syllable-logo-2" src="/syllable-logo-new-2.png" />
                  <img className="syllable-logo syllable-logo-3" src="/syllable-logo-new-3.png" />
              */}
                {
                  this.props.logo &&
                  <img className={`syllable-logo syllable-logo-${this.props.logo}`} src={`/syllable-logo-new-${this.props.logo}.png`} />
                }
                {
                  !this.props.logo &&
                  <span className="syllable-logo syllable-logo-0 icon-syllable-logo"></span>
                }
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
