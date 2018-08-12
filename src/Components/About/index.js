import React from 'react';
import Menu from '../Menu';
import SideMenu from '../SideMenu';
import './index.scss';

class About extends React.Component {
  render() {
    return (
      <div className="page page-about">
        <div className="page-inner">
          <Menu />
          <div className="page-panel">
            <div className="flex-container">
              <div className="flex-cols-2">
                <div className="background-map"></div>
              </div>
              <div className="flex-cols-2">
                <section>
                  <h2>
                    About
                  </h2>
                  <p>Syllable Productions is a technology and design shop in Brooklyn, NY. </p>
                  <p>We make digital products, like websites and apps. Sometimes we design physical products, like interactive installations. We like to stay current on emerging technologies, like AR, and blockchain.</p>
                  <p>We think big-picture. We believe details matter.</p>
                  <p>Technology is our craft. But our mission is to build things for human folks.</p>
                  <p>Syllable Productions is run by Eric Chaves. Say Hello!</p>
                </section>
                <section>
                  <h2>
                    Contact
                  </h2>
                  <p>
                    <a href="mailto:eric@syllable.productions" target='_blank' rel="noopener noreferrer">eric@syllable.productions</a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
        <SideMenu />
      </div>
    );
  }
}

export default About;
