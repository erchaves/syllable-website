import React from 'react';
import NavMain from '../NavMain';
import NavSide from '../NavSide';
import './index.scss';

class About extends React.Component {
  render() {
    return (
      <div className="page page-about">
        <NavMain />
        <div className="page-inner">
          <div className="page-panel">
            <div className="flex-container">
              <div className="two-col-panel flex-cols-2 about-map">
                <div className="background-map"></div>
              </div>
              <div className="two-col-panel scroll flex-cols-2 col-right">
                <section>
                  <h2 className="h2">
                    About
                  </h2>
                  <p>Syllable is a technology and design shop in Brooklyn, NY. </p>
                  <p>We make digital products, like websites and apps. Sometimes we design physical products, like interactive installations. We like to stay current on emerging technologies, like AR, and blockchain.</p>
                  <p>We think big-picture. We believe details matter.</p>
                  <p>Technology is our craft. But our mission is to build things for <span className="no-wrap">human folks.</span></p>
                  <p>Syllable is run by Eric Chaves. <a href="mailto:eric@syllable.productions" target='_blank' rel="noopener noreferrer">Say Hello!</a></p>
                </section>
                <section>
                  <h2 className="h2">
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
        <NavSide />
      </div>
    );
  }
}

export default About;
