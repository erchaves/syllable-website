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
                <p>Syllable is a technology and design studio in Brooklyn, New York.</p>
                <p>We're a full stack agency designing and building websites, apps, and other digital products.</p>
                <h2 className="h2">
                  Why Choose Syllable
                </h2>

                <p>Syllable is run by Eric Chaves. <a href="mailto:eric@syllablehq.com" target="_blank" rel="noopener noreferrer">Let's work together!</a></p>
              </section>
              <section>
                <h2 className="h2">
                  Contact
                </h2>
                <address>
                  Syllable Technology &amp; Design<br />
                  67 West St, Suite 401-C11 <br />
                  Brooklyn, NY 11222
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
