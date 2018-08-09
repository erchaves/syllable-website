import React from 'react';
import Menu from '../Menu';
import CloseButton from '../CloseButton';
import './index.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className="page page-contact">
        <div className="page-inner">
          <Menu />
          <section className="featured">
            <span>
              To contribute something you’ve heard at work, or just to say hi, send me an email at
            </span>
            <br />
            <a href="mailto:justine.braisted@gmail.com?subject=Hello" target='_blank' rel="noopener noreferrer">justine.braisted@gmail.com</a>
          </section>
          <CloseButton />
        </div>
      </div>
    );
  }
}

export default Contact;
