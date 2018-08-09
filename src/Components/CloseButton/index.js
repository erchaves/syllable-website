import React from 'react';
import './index.scss';

class CloseButton extends React.Component {
  render() {
    return (
      <div className="close-button">
        <a href="/">
          <span className="icon-cancel"></span>
        </a>
      </div>
    );
  }
}

export default CloseButton;
