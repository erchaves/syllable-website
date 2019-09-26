import React from 'react';
import './index.scss';

class NavMain extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const activePage = this.props.activePage;
    const shouldUseH1 = activePage === 'home' || activePage === 'projects';

    return (
      <nav className="nav-main">
        {
          shouldUseH1 && <h1>
            <a className="nav-logo" href="/">
              <img className={`syllable-logo`} src={`/syllable-logo.svg`} alt="Syllable Technology and Design"/>
            </a>
          </h1>
        }
        {
          !shouldUseH1 && <a className="nav-logo" href="/">
            <img className={`syllable-logo`} src={`/syllable-logo.svg`} alt="Syllable Technology and Design"/>
          </a>
        }
        <ul className="nav-items">
          <li className="item-secondary studio">
            <a href="/studio">
              <span className={activePage === 'studio' ? "syll indicator" : "syll"}></span>
              Stu
              <span className="syll"></span>
                di
              <span className="syll"></span>
                o
              <span className="syll"></span>
            </a>
          </li>
          <li className="item-secondary projects">
            <a href="/projects">
              <span className={activePage === 'projects' ? "syll indicator" : "syll"}></span>
                Pro
              <span className="syll"></span>
                jects
              <span className="syll"></span>
            </a>
          </li>
          <li className="item-secondary blog">
            <a href="https://blog.syllablehq.com" target='_blank' rel="noopener noreferrer">
              <span className="syll"></span>
              Blog
              <span className="syll"></span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavMain;
