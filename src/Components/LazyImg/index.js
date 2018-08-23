import React from 'react';
import './index.scss';

class LazyImg extends React.Component {
  constructor(props) {
    super(props);

    this.foo = 2;
    this.setLoader = this.setLoader.bind(this);
    this.state = { imageStatus: "loading" };
  }
  setLoader() {
    this.setState({ imageStatus: "loading" });
  }

  handleImageLoaded() {
    clearTimeout(this.loaderTimeout);
    this.setState({ imageStatus: "loaded" });
  }

  handleImageErrored() {
    clearTimeout(this.loaderTimeout);
    this.setState({ imageStatus: "failed to load" });
  }

  componentWillReceiveProps(props) {
    clearTimeout(this.loaderTimeout);
    this.loaderTimeout = setTimeout(this.setLoader, 10);
  }

  render() {
    // debugger;
    return (
      <div
        className="lazy-img"
        data-status={this.state.imageStatus}
      >
        <img
          src={this.props.src}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
        />
        <span className="loading-icon icon-spin2 animate-spin"></span>
      </div>
    );
  }
}
export default LazyImg;