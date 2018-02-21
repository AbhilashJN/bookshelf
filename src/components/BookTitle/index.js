import React from 'react';
import PropTypes from 'prop-types';
import './bookTitle.css';

class BookTitle extends React.Component {
  render() {
    return (
      <div className="book-title">
        {this.props.text}

      </div>);
  }
}
BookTitle.defaultProps = {
  text: 'Title',
};
BookTitle.propTypes = {
  text: PropTypes.string,
};
export default BookTitle;
