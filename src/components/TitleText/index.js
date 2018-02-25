import React from 'react';
import './titleText.css';

class TitleText extends React.Component {
  render() {
    return (
      <div className="title-text-container">
        <div className="title-text">
      The&nbsp;<span className="large">Book</span>&nbsp;Shelf
        </div>
        <hr className="logo-underline" />
      </div>
    );
  }
}
TitleText.defaultProps = {
};
TitleText.propTypes = {
};
export default TitleText;
