import React from 'react';
import './index.scss';

function NavSide() {
  return (
    <div className="nav-side">
      <div className="bar-wrap left">
        <div className="bar">
          <div className="menu">
            {/* <a className="menu-item" href="https://medium.com/@syllable">
              <div className="menu-item__animation-wrapper">
                <span className="menu-item__icon icon-medium"></span>
                <span className="menu-item__label">Blog</span>
              </div>
            </a> */}
          </div>
        </div>
      </div>

      <div className="bar-wrap right">
        <div className="bar">
        </div>
      </div>
    </div>
  );
}

export default NavSide;
