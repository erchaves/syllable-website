import React from 'react';
import Menu from '../Menu';
import CloseButton from '../CloseButton';
import './index.scss';

class About extends React.Component {
  render() {
    return (
      <div className="page page-about">
        <div className="page-inner">
          <Menu />
          <section className="featured">
            <span>
              Heard at Work is a collection of things that caught my ear while working at Pentagram in <span className="no-wrap">New York</span> from <span className="no-wrap">2016–2018</span>.
            </span>
          </section>
          <CloseButton />
        </div>
      </div>
    );
  }
}

export default About;
