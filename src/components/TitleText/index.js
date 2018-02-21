import React from 'react';
import PropTypes from 'prop-types';
import './titleText.css';

class TitleText extends React.Component {
  render() {
    return (
      <div className="title-text">The&nbsp;<span className="large">Book</span>&nbsp;Shelf</div>
    );
  }
}
TitleText.defaultProps = {
};
TitleText.propTypes = {
};
export default TitleText;
