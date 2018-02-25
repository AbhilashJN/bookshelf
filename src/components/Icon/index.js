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
    iconName: '',
  };
Icon
  .propTypes = {
    iconName: PropTypes.string,
  };
export default Icon;

