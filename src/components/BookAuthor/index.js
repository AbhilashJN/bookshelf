import React from 'react';
import PropTypes from 'prop-types';
import './bookAuthor.css';

class BookAuthor extends React.Component {
  render() {
    return (
      <div className="book-author">
        {this.props.text}
      </div>);
  }
}
BookAuthor.defaultProps = {
  text: 'author',
};
BookAuthor.propTypes = {
  text: PropTypes.string,
};
export default BookAuthor;
