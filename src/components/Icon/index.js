import React from 'react';
import PropTypes from 'prop-types';
import './icon.css';


class Icon
  extends React.Component {
  render() {
    return (
      <button type="button" className={`icon ${this.props.iconName}`} />);
  }
}
Icon
  .defaultProps = {
  };
Icon
  .propTypes = {
  };
export default Icon;

