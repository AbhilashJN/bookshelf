import React from 'react';
import './titleBar.css';
import TitleText from '../TitleText';

class TitleBar extends React.Component {
  render() {
    return (
      <div className="title-bar">
        <TitleText />
      </div>);
  }
}
TitleBar.defaultProps = {
};
TitleBar.propTypes = {
};
export default TitleBar;
