import React from 'react';
import Menu from '../Menu';
import './index.scss';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page page-home">
        <div className="page-inner">
          <Menu />
        </div>
      </div>
    );
  }
}

export default Home;
