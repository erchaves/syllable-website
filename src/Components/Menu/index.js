import React from 'react';
import './index.scss';

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <ul className="flex-wrap">
          <li className="item-secondary flex-item">
            <a href="/about">About</a>
          </li>
          <li className="item-primary flex-item">
            <a href="/">Heard
              <br />
              <span className="no-wrap">at Work</span>
            </a>
          </li>
          <li className="item-secondary flex-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
