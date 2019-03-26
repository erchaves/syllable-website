import React from 'react';
import './index.scss';

class NavMain extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const activePage = this.props.activePage;

    return (
      <nav className="nav-main">
        <a className="nav-logo" href="/">
          <img className={`syllable-logo`} src={`/syllable-logo.svg`} />
        </a>
        <ul className="nav-items">
          <li className="item-secondary studio">
            <a href="/studio">
              <span className={activePage === 'studio' ? "syll indicator" : "syll"}></span>
              <span className="syll">
              Stu
              </span>
              <span className="syll">
                di
              </span>
              <span className="syll">
                o
              </span>
            </a>
          </li>
          <li className="item-secondary projects">
            <a href="/projects">
              <span className={activePage === 'projects' ? "syll indicator" : "syll"}></span>
              <span className="syll">
                Pro
              </span>
              <span className="syll">
                jects
              </span>
            </a>
          </li>
          <li className="item-secondary blog">
            <a href="https://blog.syllablehq.com" target='_blank' rel="noopener noreferrer">
              <span className="syll"></span>
              <span className="syll">Blog</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavMain;
