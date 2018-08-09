import React from 'react';
import './index.scss';

class QuoteDisplay extends React.Component {
  render() {
    const quote = this.props.quote;

    return (
      <div className="quote-display">
        <div>
          {quote.text}
        </div>
      </div>
    );
  }
}

export default QuoteDisplay;
