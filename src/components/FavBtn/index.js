import React from 'react';
import PropTypes from 'prop-types';
import './favBtn.css';

class FavBtn extends React.Component {
  render() {
    console.log('fav-btn::::', this.props.status);
    return (
      <button className={`fav-btn ${this.props.status}`} onClick={() => { this.props.clickHandler(); }} />
    );
  }
}
FavBtn.defaultProps = {
  status: 'notliked',
  clickHandler: () => {},
};
FavBtn.propTypes = {
  status: PropTypes.string,
  clickHandler: PropTypes.func,
};
export default FavBtn;
