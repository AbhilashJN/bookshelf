import React from 'react';
import PropTypes from 'prop-types';
import './bookRating.css';

class BookRating extends React.Component {
  render() {
    return (
      <div className="book-rating">
        {this.props.text}

      </div>);
  }
}
BookRating.defaultProps = {
  text: '0.0',
};
BookRating.propTypes = {
  text: PropTypes.number,
};
export default BookRating;
