import React from 'react';
import PropTypes from 'prop-types';
import './favBtn.css';

class FavBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.status,
    };
  }
  render() {
    console.log('f:::::::', this.state.color);
    return (
      <button className={`fav-btn ${this.props.status}`} onClick={() => { this.props.clickHandler(); }} />
    );
  }
}
FavBtn.defaultProps = {
};
FavBtn.propTypes = {
};
export default FavBtn;
