import React from 'react';
import './index.scss';

class ReloadQuoteButton extends React.Component {
  constructor() {
    super();

    this.state = {
      hasMouseDown: false,
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleMouseDown(e) {
    this.setState({
      hasMouseDown: true,
    });
  }

  handleMouseUp(e) {
    this.setState({
      hasMouseDown: false,
    });
  }

  render() {
    return (
      <button className="button-refresh"
        data-mouse-down={this.state.hasMouseDown}
        onClick={this.props.handleNextQuote}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        <span className="icon-cw" />
      </button>
    );
  }
}

export default ReloadQuoteButton;
