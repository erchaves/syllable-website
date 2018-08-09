import React from 'react';
import Menu from '../Menu';
import QuoteDisplay from '../QuoteDisplay';
import ReloadQuoteButton from '../ReloadQuoteButton';
import quotes from '../../data-quotes.json';
import './index.scss';

const getRandomIdx = () => {
  return Math.floor(Math.random() * quotes.length);
}


class Home extends React.Component {
  constructor() {
    super();

    const randomQuoteInt = getRandomIdx();

    this.state = {
      currQuoteInt: randomQuoteInt,
    }

    this.handleNextQuote = this.handleNextQuote.bind(this);
  }

  // don't let the "random" idx be the same as last time
  getValidatedIdx(idx) {
    // avoid infinite recursion.
    if (quotes.length < 2) {
      return idx;
    }

    if (idx === this.state.currQuoteInt) {
      // if this causes infinite recursion, go buy a lotto ticket.
      return this.getValidatedIdx(getRandomIdx());
    }

    return idx;
  }

  handleNextQuote() {
    const newIdx = this.getValidatedIdx(getRandomIdx());

    this.setState({
      currQuoteInt: newIdx,
    });
  }

  render() {
    const currQuote = quotes[this.state.currQuoteInt];

    return (
      <div className="page page-home">
        <div className="page-inner">
          <Menu />
          <QuoteDisplay quote={currQuote} />
          <ReloadQuoteButton handleNextQuote={this.handleNextQuote} />
        </div>
      </div>
    );
  }
}

export default Home;
