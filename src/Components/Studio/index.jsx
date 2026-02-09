import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavMain from '../NavMain';
import NavSide from '../NavSide';
import './index.scss';

function Studio() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/about') {
      navigate('/studio', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="page page-about">
      <NavMain activePage="studio" />
      <div className="page-inner">
        <div className="page-panel">
          <div className="flex-container">
            <div className="two-col-panel flex-cols-2 about-map">
              <div className="background-map"></div>
            </div>
            <div className="two-col-panel scroll flex-cols-2 col-right">
              <section>
                <h1 className="h2">
                  About Syllable
                </h1>
                <p>Hi, we're a technology and design studio in Brooklyn, NY.</p>

                <p>Syllable is a full service agency. We design and build digital products for a wide range of clients including global brands, non-profits, and startups.</p>
              </section>
              <section>
                <h2 className="h2">
                  Our Focus
                </h2>
                <p>We seek out projects that inspire us. We often partner with mission-driven sectors like cultural institutions, education, climate, and emerging technologies.</p>
                <p>We're a fully AI-capable shop, both leveraging AI for efficiency gains and building AI tools for our clients.</p>
              </section>

              <section>
                <h2 className="h2">
                  Contact
                </h2>
                <address>
                  Eric Chaves <br />
                  Syllable Technology &amp; Design<br />

                </address>
                <p>
                  <a href="mailto:eric@syllablehq.com" target="_blank" rel="noopener noreferrer">eric@syllablehq.com</a>
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

export default Studio;
